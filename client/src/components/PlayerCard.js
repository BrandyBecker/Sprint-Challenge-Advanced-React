import React from "react";
import { Card, Icon } from 'semantic-ui-react';

const PlayerCard = ({ key, name, country, searches }) => {
    return (
        <div className="playercard" data-testid={key}>
            <Card centered className="singleCards">
                <Card.Header><h2> 👧 Name: {name}</h2></Card.Header>
                <Card.Meta>
                    <h3> 🗺️ Country: {country}</h3>
                </Card.Meta>
                <Card.Description>
                    <h3>
                        <Icon name="user" />
                        🔎 Searches: {searches}</h3>
                </Card.Description>
            </Card>

        </div>
    )
}
export default PlayerCard 