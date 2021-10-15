import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './index.css'

const Skill = (props)=>{
    return (
        <div className = 'skill-card'>
            <Card sx={{ maxWidth: 300 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="130"
                image={props.imgLink}
                alt={props.name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.text}
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>
        </div>
    );
}

export default Skill