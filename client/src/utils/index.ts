import { Button, styled } from "@mui/material";

export const GoogleButton = styled(Button)(({ theme }) => ({
  height: theme.spacing(12),

  '&.MuiButton-root': {
    ...theme.typography.body1,
    textTransform: 'none',
    color: "#0000",
    background: "gray",
    boxShadow: 'none'
  }
}));
