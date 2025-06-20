import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Chip,
} from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  position: 'relative',
  '& .slick-dots': {
    bottom: -40,
    '& li button:before': {
      fontSize: 12,
      color: theme.palette.primary.main,
    },
    '& li.slick-active button:before': {
      color: theme.palette.primary.main,
    },
  },
}));

const FeaturedCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  height: 400,
  boxShadow: theme.shadows[4],
}));

const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  height: '100%',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.1) 100%)',
  },
}));

const ContentOverlay = styled(CardContent)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  color: '#fff',
  zIndex: 1,
  padding: theme.spacing(3),
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(3),
  left: theme.spacing(3),
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  fontWeight: 500,
  zIndex: 1,
}));

const FeaturedPostCarousel = ({ featuredPosts }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {featuredPosts.map((post) => (
          <Box key={post.id} sx={{ p: 1 }}>
            <FeaturedCard>
              <CardMediaStyled image={post.coverImage || 'https://source.unsplash.com/random/1200x800/?blog'} title={post.title} />
              <CategoryChip label={post.category || 'Featured'} />
              <ContentOverlay>
                <Typography
                  variant="h4"
                  component={Link}
                  to={`/articles/${post.id}`}
                  sx={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontWeight: 700,
                    display: 'block',
                    mb: 2,
                    '&:hover': {
                      color: 'primary.light',
                    },
                  }}
                >
                  {post.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ mb: 3, opacity: 0.9, maxWidth: '80%' }}
                >
                  {post.excerpt}
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar
                      src={post.author?.avatar || `https://i.pravatar.cc/150?u=${post.author?.name || 'user'}`}
                      alt={post.author?.name || 'Author'}
                      sx={{ width: 40, height: 40, mr: 1 }}
                    />
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {post.author?.name || 'Anonymous'}
                      </Typography>
                      <Typography variant="caption" sx={{ opacity: 0.8 }}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                        {' · '}
                        {post.readingTime || 5} min read
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    component={Link}
                    to={`/articles/${post.id}`}
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Read More
                  </Button>
                </Box>
              </ContentOverlay>
            </FeaturedCard>
          </Box>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default FeaturedPostCarousel;
