import { Card, CardContent, Typography, CardHeader, Avatar, IconButton } from '@mui/material';
import { IconType } from 'react-icons';

interface CardItemProps {
  title: string;
  description: string;
  height: number;
  Icon: IconType;
}

const CardItem: React.FC<CardItemProps> = ({ title, description, height = 200, Icon }: CardItemProps) => {
  return (
    <Card sx={{ maxWidth: { lg: '100%' }, borderRadius: '15px', height: height+'px' }}>
      <CardHeader
        avatar={
          <Avatar>
            <Icon />
          </Avatar>
        }
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
