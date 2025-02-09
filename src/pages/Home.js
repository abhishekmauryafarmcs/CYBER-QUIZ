import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Chip,
} from '@mui/material';

function DifficultyCard({ title, description, color, points, image, onSelect }) {
  return (
    <Card
      elevation={3}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.02)',
        },
      }}
    >
      <CardContent sx={{ p: 1.5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          <Chip
            label={`${points} pts/question`}
            color={color}
            size="small"
          />
        </Box>
        <Typography 
          variant="body2" 
          color="text.secondary"
          sx={{ 
            whiteSpace: 'pre-line',
            minHeight: '2.5em',
            lineHeight: 1.25
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <Box sx={{ 
        flex: 1, 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        minHeight: 300,
        p: 2,
        backgroundColor: 'grey.50'
      }}>
        <CardMedia
          component="img"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            borderRadius: 1
          }}
          image={image}
          alt={`${title} level illustration`}
        />
      </Box>
      <CardActions sx={{ p: 1 }}>
        <Button
          fullWidth
          variant="contained"
          color={color}
          onClick={onSelect}
          size="small"
        >
          Start {title} Quiz
        </Button>
      </CardActions>
    </Card>
  );
}

function Home() {
  const navigate = useNavigate();

  const difficulties = {
    beginner: {
      title: 'Beginner',
      description: 'Learn the basics of cybersecurity. Perfect for those just starting.',
      color: 'success',
      points: 10,
      image: '/images/beginner_img.jpg'
    },
    intermediate: {
      title: 'Intermediate',
      description: 'Dive deeper into security concepts with challenging questions.',
      color: 'warning',
      points: 20,
      image: '/images/intermediate_jpg.jpg'
    },
    advanced: {
      title: 'Advanced',
      description: 'Test your expertise with complex\nsecurity scenarios and cyber threats.',
      color: 'error',
      points: 30,
      image: '/images/advanced_jpg.jpg'
    },
  };

  const handleDifficultySelect = (difficulty) => {
    navigate('/quiz', { state: { difficulty } });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        gap: 2,
      }}
    >
      <Box sx={{ mb: 1 }}>
        <Typography
          variant="h1"
          component="h1"
          align="center"
          sx={{
            color: 'primary.main',
            fontWeight: 'bold',
            mb: 1,
          }}
        >
          CyberQuiz
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          align="center"
          sx={{
            maxWidth: 'sm',
            mx: 'auto',
            fontSize: { xs: '1rem', sm: '1.25rem' },
          }}
        >
          Test your cybersecurity knowledge and earn badges
        </Typography>
      </Box>

      <Grid container spacing={2} sx={{ flex: 1 }}>
        {Object.entries(difficulties).map(([key, difficulty]) => (
          <Grid item xs={12} sm={4} key={key}>
            <DifficultyCard
              {...difficulty}
              onSelect={() => handleDifficultySelect(key)}
            />
          </Grid>
        ))}
      </Grid>

      <Grid 
        container 
        spacing={2} 
        sx={{ 
          mt: 'auto',
          mb: 1,
          justifyContent: 'center',
        }}
      >
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="subtitle2" align="center">
            🎯 Interactive
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="subtitle2" align="center">
            🏆 Earn Badges
          </Typography>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Typography variant="subtitle2" align="center">
            📱 Mobile Ready
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home; 