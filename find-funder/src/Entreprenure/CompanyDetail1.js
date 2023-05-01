import React,{useState,useEffect} from 'react'
import validator from "validator";
import {
    Form,
    Button,
    Input,
    Row,
    Col,
    FormGroup,
    Label,
    FormText,
  } from "reactstrap";
export default function CompanyDetail1({CompanyData,setCompanyData}) {
    const [country, setCountry] = useState([]);
    const [countryId, setcountryId] = useState("");
    const [state, setState] = useState([]);
    const [stateId, setstateId] = useState("");
    const [city, setCity] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getCountry = async () => {
          const resCountry = await fetch(
            "http://192.168.1.14:5182/api/CityStateCountry/getAllCountry"
          );
          const rescon = await resCountry.json();
          console.log("res", rescon);
          setCountry(rescon);
        };
        getCountry();
      }, []);
    
      const handleCountry = (e) => {
        setcountryId(e.target.value);
      };
    
      useEffect(() => {
        const getState = async () => {
          const resState = await fetch(
            `http://192.168.1.14:5182/api/CityStateCountry/getAllState/${countryId}`
          );
          const resSta = await resState.json();
          console.log("res", resSta);
          setState(resSta);
        };
        countryId && getState();
      }, [countryId]);
    
      const handlestate = (e) => {
        setstateId(e.target.value);
      };
    
      useEffect(() => {
        const getCity = async () => {
          const resCity = await fetch(
            `http://192.168.1.14:5182/api/CityStateCountry/getAllCity/${stateId}`
          );
          const rescity = await resCity.json();
          console.log("res", rescity);
          setCity(rescity);
        };
        stateId && getCity();
      }, [stateId]);
    
      const handlecity = (e) => {
        setCompanyData({ ...CompanyData, cityId: e.target.value });
      };

  return (
    <div>

      <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="name">Company Name</Label>
                  <Input
                    value={CompanyData.Name}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        Name: e.target.value,
                      })
                    }
                    placeholder="CompanyName"
                    type="text"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="logo">Company Logo</Label>
                  <Input
                    // value={CompanyData.Logo}
                    onChange={(e)=>setCompanyData({...CompanyData,Logo:e.target.files[0]})} 
                        //  value={CompanyData.Logo}
                    // onChange={(e) =>
                    //   setCompanyData({
                    //     ...CompanyData,
                    //     Logo: e.target.files.name,
                    //   })
                    // }
                    placeholder="png File"
                    type="file"
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
   
                <FormGroup>
                  <Label for="url">Website Url</Label>
                  <Input
                    value={CompanyData.WebsiteUrl}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        WebsiteUrl: e.target.value,
                      })
                    }
                    placeholder="http://example.com"
                  />
                </FormGroup>
                </Row>
                <Row>
                 <FormGroup>
                  <Label>Address</Label>
                  <Input
                    value={CompanyData.Address}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        Address: e.target.value,
                      })
                    }
                    placeholder="1234 Main St"
                  />
                </FormGroup>
              
            </Row>
            <Row>
         
              <Col md={6}>
                <FormGroup>
                  <Label>PinCode</Label>
                  <Input
                    value={CompanyData.PinCode}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        PinCode: e.target.value,
                      })
                    }
                    placeholder="******"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Location</Label>
                  <Input
                    value={CompanyData.Location}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        Location: e.target.value,
                      })
                    }
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleCountry">Country</Label>
                  <Input
                    id="exampleCountry"
                    name="Country"
                    type="select"
                    onChange={handleCountry}
                  >
                    <option>Country</option>
                    {country?.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </Input>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleState">State</Label>
                  <Input
                    id="exampleState"
                    name="state"
                    type="select"
                    onChange={handlestate}
                  >
                    <option>State</option>
                    {state.length
                      ? state?.map((item, index) => {
                          return (
                            <option key={index} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })
                      : []}
                  </Input>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleCity">City</Label>
                  <Input
                    value={CompanyData.cityId}
                    onChange={handlecity}
                    type="select"
                  >
                    <option>City</option>
                    {city?.map((item, index) => {
                      return (
                        <option key={index} value={item.id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            </Form>
    </div>
  )
}
