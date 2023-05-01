import React from 'react'
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

export default function CompanyDetail2({CompanyData,setCompanyData}) {
  return (
    <div>
   <Form>
   <FormGroup>
              <Label>Company Description</Label>
              <Input
                value={CompanyData.Description}
                onChange={(e) =>
                  setCompanyData({
                    ...CompanyData,
                    Description: e.target.value,
                  })
                }
                placeholder="CompanyDescription"
                type="text"
              />
            </FormGroup>

            <FormGroup>
              <Label>Proposal Detail</Label>
              <Input
                value={CompanyData.ProposalDetail}
                onChange={(e) =>
                  setCompanyData({
                    ...CompanyData,
                    ProposalDetail: e.target.value,
                  })
                }
                placeholder="ProposalDetail"
                type="text"
              />
            </FormGroup>
            <FormGroup>
                  <Label>Pitch Document</Label>
                  <Input
                    // value={CompanyData.PitchDocument}
                    onChange={(e)=>setCompanyData({...CompanyData,PitchDocument:e.target.files[0]})} 
                    // onChange={(e) =>
                    //   setCompanyData({
                    //     ...CompanyData,
                    //     PitchDocument: e.target.files[0],
                    //   })
                    // }
                    placeholder="attech file"
                    type="file"
                  />
                </FormGroup>

            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label>Total Employee</Label>
                  <Input
                    value={CompanyData.TotalEmployee}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        TotalEmployee: e.target.value,
                      })
                    }
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Total Branch</Label>
                  <Input
                    value={CompanyData.TotalBranch}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        TotalBranch: e.target.value,
                      })
                    }
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
              <FormGroup>
                  <Label>Bussiness Type</Label>
                  <Input
                    value={CompanyData.BusinessType}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        BusinessType: e.target.value,
                      })
                    }
                    type="select"
                  >
                    <option value={0}>ProductBased</option>
                    <option value={1}>ServiceBased</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

   </Form>
    </div>
  )
}
