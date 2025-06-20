import React from 'react';
import { styled } from '@mui/material/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Avatar,
  Box,
  Chip,
  IconButton,
} from '@mui/material';
import {
  BookmarkBorder as BookmarkIcon,
  Share as ShareIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[4],
  },
}));

const CardMediaStyled = styled(CardMedia)(({ theme }) => ({
  paddingTop: '56.25%', // 16:9 aspect ratio
  position: 'relative',
}));

const CategoryChip = styled(Chip)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  left: theme.spacing(2),
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: '#fff',
  fontWeight: 500,
}));

const ReadingTime = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(1),
  right: theme.spacing(1),
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  color: '#fff',
  padding: '2px 8px',
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.75rem',
}));

const PostCard = ({ post }) => {
  const {
    id,
    title,
    excerpt,
    coverImage,
    author,
    category,
    readingTime = 5,
    publishedAt,
    viewCount = 0,
  } = post;

  // Format date
  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <StyledCard>
      <CardMediaStyled image={coverImage || 'https://source.unsplash.com/random/800x600/?blog'} title={title}>
        <CategoryChip label={category || 'General'} size="small" />
        <ReadingTime>{readingTime} min read</ReadingTime>
      </CardMediaStyled>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography
          gutterBottom
          variant="h5"
          component={Link}
          to={`/articles/${id}`}
          sx={{
            color: 'text.primary',
            textDecoration: 'none',
            fontWeight: 600,
            display: 'block',
            mb: 1,
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ mb: 2, lineHeight: 1.6 }}
        >
          {excerpt}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              src={author?.avatar || `https://i.pravatar.cc/150?u=${author?.name || 'user'}`}
              alt={author?.name || 'Author'}
              sx={{ width: 32, height: 32, mr: 1 }}
            />
            <Box>
              <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                {author?.name || 'Anonymous'}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {formattedDate}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mr: 1,
                color: 'text.secondary',
              }}
            >
              <VisibilityIcon sx={{ fontSize: 16, mr: 0.5 }} />
              <Typography variant="caption">{viewCount}</Typography>
            </Box>
            <IconButton size="small">
              <BookmarkIcon fontSize="small" />
            </IconButton>
            <IconButton size="small">
              <ShareIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default PostCard;
