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

export default function CompanyDetail3({CompanyData,setCompanyData}) {
  return (
    <div>
<Form>
<Row>
              <Col md={4}>
                <FormGroup>
                  <Label>Equity</Label>
                  <Input
                    value={CompanyData.Equity}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        Equity: e.target.value,
                      })
                    }
                    placeholder="Stack of the Company"
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Required Amount</Label>
                  <Input
                    value={CompanyData.RequiredAmount}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        RequiredAmount: e.target.value,
                      })
                    }
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label>Proposal Type</Label>
                  <Input
                    value={CompanyData.IsPublic}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        IsPublic: e.target.value,
                      })
                    }
                    type="select"
                  >
                    <option value={true}>Public</option>
                    <option value={false}>Private</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Current Revenue</Label>
                  <Input
                    value={CompanyData.CurrentRevenue}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        CurrentRevenue: e.target.value,
                      })
                    }
                    type="number"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Startup Date</Label>
                  <Input
                    value={CompanyData.StartupDate}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        StartupDate: e.target.value,
                      })
                    }
                    type="date"
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Proposal StartDate</Label>
                  <Input
                    value={CompanyData.ProposalStartDate}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        ProposalStartDate: e.target.value,
                      })
                    }
                    type="date"
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Proposal EndDate</Label>
                  <Input
                    value={CompanyData.ProposalEndDate}
                    onChange={(e) =>
                      setCompanyData({
                        ...CompanyData,
                        ProposalEndDate: e.target.value,
                      })
                    }
                    type="date"
                  />
                </FormGroup>
              </Col>
            </Row>
</Form>
    </div>
  )
}
