// src/Card.jsx
import { Card as MuiCard, CardContent, CardMedia, Button, Box, Typography } from "@mui/material"
import { motion } from "framer-motion"
import { useStore } from "./store"

export default function Card({ card }) {
  const { selected, toggleSelect, winnerId, drawIds } = useStore()

  const isSelected = selected.includes(card.id)
  const isWinner = winnerId === card.id
  const isDraw = drawIds.includes(card.id)
  const hasCompared = isWinner || isDraw

  const truncate = (text, maxLength) => {
    if (!text) return ""
    if (text.length <= maxLength) return text
    return text.slice(0, maxLength) + "..."
  }

  return (
    <motion.div
      animate={
        isWinner
          ? { scale: [1, 1.05, 1] }
          : isDraw
          ? { rotate: [0, 5, -5, 0] }
          : {}
      }
      transition={{ duration: 0.6, repeat: isWinner || isDraw ? 2 : 0 }}
    >
      <MuiCard
        sx={{
          textAlign: "center",
          p: 2,
          border: isWinner
            ? "3px solid green"
            : isSelected
            ? "3px solid red"
            : "1px solid #ddd",
          position: "relative",
          borderRadius: "16px",
          transition: "border 0.3s",
        }}
      >
        {/* WIN */}
        {isWinner && (
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "green",
              color: "white",
              px: 1.5,
              py: 0.5,
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "0.8rem",
            }}
          >
            WIN
          </Box>
        )}

        {/* DRAW */}
        {isDraw && (
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "orange",
              color: "white",
              px: 1.5,
              py: 0.5,
              borderRadius: "8px",
              fontWeight: "bold",
              fontSize: "0.8rem",
            }}
          >
            DRAW
          </Box>
        )}

        {/* Başlık */}
        <Box
          sx={{
            bgcolor: "#f0f0f0",
            borderRadius: "16px",
            px: 2,
            py: 1,
            mb: 2,
            display: "inline-block",
          }}
        >
          <Typography variant="subtitle1">{truncate(card.title, 18)}</Typography>
        </Box>

        {/* Görsel */}
        <CardMedia
          component="img"
          image={card.image}
          alt={card.title}
          sx={{ height: 200, objectFit: "contain" }}
        />

        {/* Açıklama + özellikler */}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {truncate(card.description, 25)}
          </Typography>

          <Box sx={{ mt: 1, display: "flex", justifyContent: "space-around" }}>
            <Typography variant="caption" color="text.primary">
              ⭐ Rating: {card.rating}
            </Typography>
            <Typography variant="caption" color="text.primary">
              💰 Price: {card.price}
            </Typography>
          </Box>

          <Box sx={{ mt: 1, textAlign: "center" }}>
            <Typography variant="caption" color="text.primary">
              ⚡ Speed: {card.speed}
            </Typography>
          </Box>
        </CardContent>

        <Button
          variant="contained"
          color={isWinner ? "success" : isSelected ? "error" : "success"}
          size="small"
          onClick={() => toggleSelect(card.id)}
        >
          {isWinner ? "WIN" : isSelected ? "Selected" : "Choose"}
        </Button>
      </MuiCard>
    </motion.div>
  )
}
