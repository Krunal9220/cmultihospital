import React from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function List({data}) {
    return (
        <div className='container mt-5 pt-5'>
            <div className='row mt-5'>
                <div className="section-title pt-3">
                    <h2>Medicine</h2>
                </div>
                <div className='col-lg-4'>
                    <Card>
                        <CardBody>
                            {
                                data.name !== undefined ?  
                                <CardTitle tag="h5">
                                    {data.name}
                                </CardTitle> : null
                            }
                            
                            <CardSubtitle
                                className="mb-2 mt-1 text-muted"
                                tag="h6"
                            >
                                Card subtitle
                            </CardSubtitle>
                            <CardText>
                                Some quick example text to build on the card title and make up the bulk of the card's content.
                            </CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default List;