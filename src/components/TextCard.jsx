import React from 'react';
import { Card, CardHeader, Avatar } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';

const TextCard = ({ cardTitle, cardText }) => {
  return (
    <div className="text_card">
      <Card>
        <CardHeader
          avatar={
            <Avatar style={{background: 'rgba(245, 54, 92, 0.29)'}} aria-label="recipe">
              <SchoolIcon style={{color: '#F5365C'}} />
            </Avatar>
          }
          title={cardTitle}
          subheader={cardText}
        />
      </Card>
    </div>
  );
};

export default TextCard;
