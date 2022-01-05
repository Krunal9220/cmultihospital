import React from "react";
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

function List(props) {
    return (
        <Card className="p-3 mx-5 col-4 w-25 ms-5 my-4">
            <CardBody>
                {
                    props.data.name !== undefined ? 
                        <CardTitle tag="h5">
                            {props.data.name}
                        </CardTitle>
                    : null
                }
                {
                    props.data.price !== undefined ? 
                        <CardSubtitle className="mb-2 mt-1 text-muted" tag="h6">
                            Price: {props.data.price}
                        </CardSubtitle>
                    : null
                }
                {
                    props.data.quantity && props.data.expiry !== undefined ? 
                        <CardText className="mb-2 mt-1 text-muted" tag="h6">
                            Quantity: {props.data.quantity} <br/>
                            Expiry: {props.data.expiry}
                        </CardText>
                    : null
                }
            </CardBody>
        </Card>
    );
}

export default List;
