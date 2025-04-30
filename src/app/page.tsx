'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [turnColor, setTurnColor] = useState(1);

  const [board, setBoard] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);
  const clickHandler = (x: number, y: number) => {
    console.log(x, y);
    const newBoard = structuredClone(board);
    const directions = [
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1],
      [-1, 0],
      [-1, -1],
    ];

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x] === 2 / turnColor &&
      board[y - 2][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x] === 2 / turnColor &&
      board[y - 2][x] === 2 / turnColor &&
      board[y - 3][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x] === 2 / turnColor &&
      board[y - 2][x] === 2 / turnColor &&
      board[y - 3][x] === 2 / turnColor &&
      board[y - 4][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      newBoard[y - 3][x] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x] === 2 / turnColor &&
      board[y - 2][x] === 2 / turnColor &&
      board[y - 3][x] === 2 / turnColor &&
      board[y - 4][x] === 2 / turnColor &&
      board[y - 5][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      newBoard[y - 3][x] = turnColor;
      newBoard[y - 4][x] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x] === 2 / turnColor &&
      board[y - 2][x] === 2 / turnColor &&
      board[y - 3][x] === 2 / turnColor &&
      board[y - 4][x] === 2 / turnColor &&
      board[y - 5][x] === 2 / turnColor &&
      board[y - 6][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      newBoard[y - 3][x] = turnColor;
      newBoard[y - 4][x] = turnColor;
      newBoard[y - 5][x] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x] === 2 / turnColor &&
      board[y - 2][x] === 2 / turnColor &&
      board[y - 3][x] === 2 / turnColor &&
      board[y - 4][x] === 2 / turnColor &&
      board[y - 5][x] === 2 / turnColor &&
      board[y - 6][x] === 2 / turnColor &&
      board[y - 7][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x] = turnColor;
      newBoard[y - 2][x] = turnColor;
      newBoard[y - 3][x] = turnColor;
      newBoard[y - 4][x] = turnColor;
      newBoard[y - 5][x] = turnColor;
      newBoard[y - 6][x] = turnColor;
      setTurnColor(2 / turnColor);
    }
    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x] === 2 / turnColor &&
      board[y + 2][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x] === 2 / turnColor &&
      board[y + 2][x] === 2 / turnColor &&
      board[y + 3][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x] === 2 / turnColor &&
      board[y + 2][x] === 2 / turnColor &&
      board[y + 3][x] === 2 / turnColor &&
      board[y + 4][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      newBoard[y + 3][x] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x] === 2 / turnColor &&
      board[y + 2][x] === 2 / turnColor &&
      board[y + 3][x] === 2 / turnColor &&
      board[y + 4][x] === 2 / turnColor &&
      board[y + 5][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      newBoard[y + 3][x] = turnColor;
      newBoard[y + 4][x] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x] === 2 / turnColor &&
      board[y + 2][x] === 2 / turnColor &&
      board[y + 3][x] === 2 / turnColor &&
      board[y + 4][x] === 2 / turnColor &&
      board[y + 5][x] === 2 / turnColor &&
      board[y + 6][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      newBoard[y + 3][x] = turnColor;
      newBoard[y + 4][x] = turnColor;
      newBoard[y + 5][x] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x] === 2 / turnColor &&
      board[y + 2][x] === 2 / turnColor &&
      board[y + 3][x] === 2 / turnColor &&
      board[y + 4][x] === 2 / turnColor &&
      board[y + 5][x] === 2 / turnColor &&
      board[y + 6][x] === 2 / turnColor &&
      board[y + 7][x] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x] = turnColor;
      newBoard[y + 2][x] = turnColor;
      newBoard[y + 3][x] = turnColor;
      newBoard[y + 4][x] = turnColor;
      newBoard[y + 5][x] = turnColor;
      newBoard[y + 6][x] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y][x + 1] === 2 / turnColor &&
      board[y][x] === turnColor
    ) {
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y][x + 1] === 2 / turnColor &&
      board[y][x + 2] === 2 / turnColor &&
      board[y][x + 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y][x + 1] === 2 / turnColor &&
      board[y][x + 2] === 2 / turnColor &&
      board[y][x + 3] === 2 / turnColor &&
      board[y][x + 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      newBoard[y][x + 3] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y][x + 1] === 2 / turnColor &&
      board[y][x + 2] === 2 / turnColor &&
      board[y][x + 3] === 2 / turnColor &&
      board[y][x + 4] === 2 / turnColor &&
      board[y][x + 5] === turnColor
    ) {
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      newBoard[y][x + 3] = turnColor;
      newBoard[y][x + 4] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y][x + 1] === 2 / turnColor &&
      board[y][x + 2] === 2 / turnColor &&
      board[y][x + 3] === 2 / turnColor &&
      board[y][x + 4] === 2 / turnColor &&
      board[y][x + 5] === 2 / turnColor &&
      board[y][x + 6] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      newBoard[y][x + 3] = turnColor;
      newBoard[y][x + 4] = turnColor;
      newBoard[y][x + 5] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y][x + 1] === 2 / turnColor &&
      board[y][x + 2] === 2 / turnColor &&
      board[y][x + 3] === 2 / turnColor &&
      board[y][x + 4] === 2 / turnColor &&
      board[y][x + 5] === 2 / turnColor &&
      board[y][x + 6] === 2 / turnColor &&
      board[y][x + 7] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x + 1] = turnColor;
      newBoard[y][x + 2] = turnColor;
      newBoard[y][x + 3] = turnColor;
      newBoard[y][x + 4] = turnColor;
      newBoard[y][x + 5] = turnColor;
      newBoard[y][x + 6] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y][x - 1] === 2 / turnColor &&
      board[y][x - 2] === turnColor
    ) {
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y][x - 1] === 2 / turnColor &&
      board[y][x - 2] === 2 / turnColor &&
      board[y][x - 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y][x - 1] === 2 / turnColor &&
      board[y][x - 2] === 2 / turnColor &&
      board[y][x - 3] === 2 / turnColor &&
      board[y][x - 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      newBoard[y][x - 3] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y][x - 1] === 2 / turnColor &&
      board[y][x - 2] === 2 / turnColor &&
      board[y][x - 3] === 2 / turnColor &&
      board[y][x - 4] === 2 / turnColor &&
      board[y][x - 5] === turnColor
    ) {
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      newBoard[y][x - 3] = turnColor;
      newBoard[y][x - 4] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y][x - 1] === 2 / turnColor &&
      board[y][x - 2] === 2 / turnColor &&
      board[y][x - 3] === 2 / turnColor &&
      board[y][x - 4] === 2 / turnColor &&
      board[y][x - 5] === 2 / turnColor &&
      board[y][x - 6] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      newBoard[y][x - 3] = turnColor;
      newBoard[y][x - 4] = turnColor;
      newBoard[y][x - 5] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y][x - 1] === 2 / turnColor &&
      board[y][x - 2] === 2 / turnColor &&
      board[y][x - 3] === 2 / turnColor &&
      board[y][x - 4] === 2 / turnColor &&
      board[y][x - 5] === 2 / turnColor &&
      board[y][x - 6] === 2 / turnColor &&
      board[y][x - 7] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y][x - 1] = turnColor;
      newBoard[y][x - 2] = turnColor;
      newBoard[y][x - 3] = turnColor;
      newBoard[y][x - 4] = turnColor;
      newBoard[y][x - 5] = turnColor;
      newBoard[y][x - 6] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x - 1] === 2 / turnColor &&
      board[y - 2][x - 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x - 1] === 2 / turnColor &&
      board[y - 2][x - 2] === 2 / turnColor &&
      board[y - 3][x - 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x - 1] === 2 / turnColor &&
      board[y - 2][x - 2] === 2 / turnColor &&
      board[y - 3][x - 3] === 2 / turnColor &&
      board[y - 4][x - 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      newBoard[y - 3][x - 3] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x - 1] === 2 / turnColor &&
      board[y - 2][x - 2] === 2 / turnColor &&
      board[y - 3][x - 3] === 2 / turnColor &&
      board[y - 4][x - 4] === 2 / turnColor &&
      board[y - 5][x - 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      newBoard[y - 3][x - 3] = turnColor;
      newBoard[y - 4][x - 4] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x - 1] === 2 / turnColor &&
      board[y - 2][x - 2] === 2 / turnColor &&
      board[y - 3][x - 3] === 2 / turnColor &&
      board[y - 4][x - 4] === 2 / turnColor &&
      board[y - 5][x - 5] === 2 / turnColor &&
      board[y - 6][x - 6] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      newBoard[y - 3][x - 3] = turnColor;
      newBoard[y - 4][x - 4] = turnColor;
      newBoard[y - 5][x - 5] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x - 1] === 2 / turnColor &&
      board[y - 2][x - 2] === 2 / turnColor &&
      board[y - 3][x - 3] === 2 / turnColor &&
      board[y - 4][x - 4] === 2 / turnColor &&
      board[y - 5][x - 5] === 2 / turnColor &&
      board[y - 6][x - 6] === 2 / turnColor &&
      board[y - 7][x - 7] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x - 1] = turnColor;
      newBoard[y - 2][x - 2] = turnColor;
      newBoard[y - 3][x - 3] = turnColor;
      newBoard[y - 4][x - 4] = turnColor;
      newBoard[y - 5][x - 5] = turnColor;
      newBoard[y - 6][x - 6] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x + 1] === 2 / turnColor &&
      board[y - 2][x + 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x + 1] === 2 / turnColor &&
      board[y - 2][x + 2] === 2 / turnColor &&
      board[y - 3][x + 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x + 1] === 2 / turnColor &&
      board[y - 2][x + 2] === 2 / turnColor &&
      board[y - 3][x + 3] === 2 / turnColor &&
      board[y - 4][x + 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x + 1] === 2 / turnColor &&
      board[y - 2][x + 2] === 2 / turnColor &&
      board[y - 3][x + 3] === 2 / turnColor &&
      board[y - 4][x + 4] === 2 / turnColor &&
      board[y - 5][x + 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      newBoard[y - 4][x + 4] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x + 1] === 2 / turnColor &&
      board[y - 2][x + 2] === 2 / turnColor &&
      board[y - 3][x + 3] === 2 / turnColor &&
      board[y - 4][x + 4] === 2 / turnColor &&
      board[y - 5][x + 5] === 2 / turnColor &&
      board[y - 6][x + 6] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      newBoard[y - 4][x + 4] = turnColor;
      newBoard[y - 5][x + 5] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x + 1] === 2 / turnColor &&
      board[y - 2][x + 2] === 2 / turnColor &&
      board[y - 3][x + 3] === 2 / turnColor &&
      board[y - 4][x + 4] === 2 / turnColor &&
      board[y - 5][x + 5] === 2 / turnColor &&
      board[y - 6][x + 6] === 2 / turnColor &&
      board[y - 7][x + 7] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      newBoard[y - 4][x + 4] = turnColor;
      newBoard[y - 5][x + 5] = turnColor;
      newBoard[y - 6][x + 6] = turnColor;
      setTurnColor(2 / turnColor);
    }
    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x - 1] === 2 / turnColor &&
      board[y + 2][x - 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x - 1] === 2 / turnColor &&
      board[y + 2][x - 2] === 2 / turnColor &&
      board[y + 3][x - 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x - 1] === 2 / turnColor &&
      board[y + 2][x - 2] === 2 / turnColor &&
      board[y + 3][x - 3] === 2 / turnColor &&
      board[y + 4][x - 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      newBoard[y + 3][x - 3] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x - 1] === 2 / turnColor &&
      board[y + 2][x - 2] === 2 / turnColor &&
      board[y + 3][x - 3] === 2 / turnColor &&
      board[y + 4][x - 4] === 2 / turnColor &&
      board[y + 5][x - 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      newBoard[y + 3][x - 3] = turnColor;
      newBoard[y + 4][x - 4] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x - 1] === 2 / turnColor &&
      board[y + 2][x - 2] === 2 / turnColor &&
      board[y + 3][x - 3] === 2 / turnColor &&
      board[y + 4][x - 4] === 2 / turnColor &&
      board[y + 5][x - 5] === 2 / turnColor &&
      board[y + 6][x - 6] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      newBoard[y + 3][x - 3] = turnColor;
      newBoard[y + 4][x - 4] = turnColor;
      newBoard[y + 5][x - 5] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x - 1] === 2 / turnColor &&
      board[y + 2][x - 2] === 2 / turnColor &&
      board[y + 3][x - 3] === 2 / turnColor &&
      board[y + 4][x - 4] === 2 / turnColor &&
      board[y + 5][x - 5] === 2 / turnColor &&
      board[y + 6][x - 6] === 2 / turnColor &&
      board[y + 7][x - 7] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x - 1] = turnColor;
      newBoard[y + 2][x - 2] = turnColor;
      newBoard[y + 3][x - 3] = turnColor;
      newBoard[y + 4][x - 4] = turnColor;
      newBoard[y + 5][x - 5] = turnColor;
      newBoard[y + 6][x - 6] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x + 1] === 2 / turnColor &&
      board[y - 2][x + 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x + 1] === 2 / turnColor &&
      board[y - 2][x + 2] === 2 / turnColor &&
      board[y - 3][x + 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x + 1] === 2 / turnColor &&
      board[y - 2][x + 2] === 2 / turnColor &&
      board[y - 3][x + 3] === 2 / turnColor &&
      board[y - 4][x + 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x + 1] === 2 / turnColor &&
      board[y - 2][x + 2] === 2 / turnColor &&
      board[y - 3][x + 3] === 2 / turnColor &&
      board[y - 4][x + 4] === 2 / turnColor &&
      board[y - 5][x + 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      newBoard[y - 4][x + 4] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x + 1] === 2 / turnColor &&
      board[y - 2][x + 2] === 2 / turnColor &&
      board[y - 3][x + 3] === 2 / turnColor &&
      board[y - 4][x + 4] === 2 / turnColor &&
      board[y - 5][x + 5] === 2 / turnColor &&
      board[y - 6][x + 6] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      newBoard[y - 4][x + 4] = turnColor;
      newBoard[y - 5][x + 5] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y - 1] !== undefined &&
      board[y - 1][x + 1] === 2 / turnColor &&
      board[y - 2][x + 2] === 2 / turnColor &&
      board[y - 3][x + 3] === 2 / turnColor &&
      board[y - 4][x + 4] === 2 / turnColor &&
      board[y - 5][x + 5] === 2 / turnColor &&
      board[y - 6][x + 6] === 2 / turnColor &&
      board[y - 7][x + 7] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y - 1][x + 1] = turnColor;
      newBoard[y - 2][x + 2] = turnColor;
      newBoard[y - 3][x + 3] = turnColor;
      newBoard[y - 4][x + 4] = turnColor;
      newBoard[y - 5][x + 5] = turnColor;
      newBoard[y - 6][x + 6] = turnColor;
      setTurnColor(2 / turnColor);
    }
    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x + 1] === 2 / turnColor &&
      board[y + 2][x + 2] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x + 1] === 2 / turnColor &&
      board[y + 2][x + 2] === 2 / turnColor &&
      board[y + 3][x + 3] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x + 1] === 2 / turnColor &&
      board[y + 2][x + 2] === 2 / turnColor &&
      board[y + 3][x + 3] === 2 / turnColor &&
      board[y + 4][x + 4] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      newBoard[y + 3][x + 3] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x + 1] === 2 / turnColor &&
      board[y + 2][x + 2] === 2 / turnColor &&
      board[y + 3][x + 3] === 2 / turnColor &&
      board[y + 4][x + 4] === 2 / turnColor &&
      board[y + 5][x + 5] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      newBoard[y + 3][x + 3] = turnColor;
      newBoard[y + 4][x + 4] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x + 1] === 2 / turnColor &&
      board[y + 2][x + 2] === 2 / turnColor &&
      board[y + 3][x + 3] === 2 / turnColor &&
      board[y + 4][x + 4] === 2 / turnColor &&
      board[y + 5][x + 5] === 2 / turnColor &&
      board[y + 6][x + 6] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      newBoard[y + 3][x + 3] = turnColor;
      newBoard[y + 4][x + 4] = turnColor;
      newBoard[y + 5][x + 5] = turnColor;
      setTurnColor(2 / turnColor);
    }

    if (
      board[y][x] === 0 &&
      board[y + 1] !== undefined &&
      board[y + 1][x + 1] === 2 / turnColor &&
      board[y + 2][x + 2] === 2 / turnColor &&
      board[y + 3][x + 3] === 2 / turnColor &&
      board[y + 4][x + 4] === 2 / turnColor &&
      board[y + 5][x + 5] === 2 / turnColor &&
      board[y + 6][x + 6] === 2 / turnColor &&
      board[y + 7][x + 7] === turnColor
    ) {
      newBoard[y][x] = turnColor;
      newBoard[y + 1][x + 1] = turnColor;
      newBoard[y + 2][x + 2] = turnColor;
      newBoard[y + 3][x + 3] = turnColor;
      newBoard[y + 4][x + 4] = turnColor;
      newBoard[y + 5][x + 5] = turnColor;
      newBoard[y + 6][x + 6] = turnColor;
      setTurnColor(2 / turnColor);
    }

    setBoard(newBoard);
  };
  return (
    <div className={styles.container}>
      <div className={styles.board}>
        {board.map((row, y) =>
          row.map((color, x) => (
            <div className={styles.cell} key={`${x}-${y}`} onClick={() => clickHandler(x, y)}>
              {color !== 0 && (
                <div
                  className={styles.stone} //↓Falseこっち//
                  style={{ background: color === 1 ? `#000` : `#fff` }}
                /> //条件//  //↑Trueだったらこっち//
              )}
            </div>
          )),
        )}
      </div>
    </div>
  );
}
