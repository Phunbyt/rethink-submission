import React from 'react'
import { Card, CardContent, Typography } from '@mui/material';
const ChatCard = ({cardText}) => {
    return (
      <div className="chat_card">
        <Card>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {cardText}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
}

export default ChatCard
