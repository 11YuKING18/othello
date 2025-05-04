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

    if (board[y][x] === 0) {
      let n = 1;
      if (board[y - n] !== undefined && board[y - n][x] === 2 / turnColor) {
        //枠外じゃないかつ置こうとしてるマスの一つとなりが相手の色だったら
        n++; //そのさらに上のマスを調べる
        while (board[y - n] !== undefined && board[y - n][x] === 2 / turnColor) {
          n++;
          //枠外または相手の石になるまで調べ続ける
        }
        if (board[y - n] !== undefined && board[y - n][x] === turnColor) {
          for (let k = 1; k < n; k++) {
            newBoard[y - k][x] = turnColor;
          }
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }

    if (board[y][x] === 0) {
      let n = 1;
      if (board[y + n] !== undefined && board[y + n][x] === 2 / turnColor) {
        n++;
        while (board[y + n] !== undefined && board[y + n][x] === 2 / turnColor) {
          n++;
        }

        if (board[y + n] !== undefined && board[y + n][x] === turnColor) {
          for (let k = 1; k < n; k++) {
            newBoard[y + k][x] = turnColor;
          }
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }

    if (board[y][x] === 0) {
      let n = 1;
      if (board[y - n] !== undefined && board[y][x + n] === 2 / turnColor) {
        n++;
        while (board[y - n] !== undefined && board[y][x + n] === 2 / turnColor) {
          n++;
        }

        if (board[y - n] !== undefined && board[y][x + n] === turnColor) {
          for (let k = 1; k < n; k++) {
            newBoard[y][x + k] = turnColor;
          }
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }

    if (board[y][x] === 0) {
      let n = 1;
      if (board[y - n] !== undefined && board[y][x - n] === 2 / turnColor) {
        n++;
        while (board[y - n] !== undefined && board[y][x - n] === 2 / turnColor) {
          n++;
        }

        if (board[y - n] !== undefined && board[y][x - n] === turnColor) {
          for (let k = 1; k < n; k++) {
            newBoard[y][x - k] = turnColor;
          }
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }

    if (board[y][x] === 0) {
      let n = 1;
      if (board[y - n][x - n] !== undefined && board[y - n][x - n] === 2 / turnColor) {
        n++;
        while (board[y - n][x - n] !== undefined && board[y - n][x - n] === 2 / turnColor) {
          n++;
        }

        if (board[y - n][x - n] !== undefined && board[y - n][x - n] === turnColor) {
          for (let k = 1; k < n; k++) {
            newBoard[y - k][x - k] = turnColor;
          }
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }

    if (board[y][x] === 0) {
      let n = 1;
      if (board[y - n][x + n] !== undefined && board[y - n][x + n] === 2 / turnColor) {
        n++;
        while (board[y - n][x + n] !== undefined && board[y - n][x + n] === 2 / turnColor) {
          n++;
        }

        if (board[y - n][x + n] !== undefined && board[y - n][x + n] === turnColor) {
          for (let k = 1; k < n; k++) {
            newBoard[y - k][x + k] = turnColor;
          }
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }

    if (board[y][x] === 0) {
      let n = 1;
      if (board[y + n][x - n] !== undefined && board[y + n][x - n] === 2 / turnColor) {
        n++;
        while (board[y + n][x - n] !== undefined && board[y + n][x - n] === 2 / turnColor) {
          n++;
        }

        if (board[y + n][x - n] !== undefined && board[y + n][x - n] === turnColor) {
          for (let k = 1; k < n; k++) {
            newBoard[y + k][x - k] = turnColor;
          }
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }

    if (board[y][x] === 0) {
      let n = 1;
      if (board[y + n][x + n] !== undefined && board[y + n][x + n] === 2 / turnColor) {
        n++;
        while (board[y + n][x + n] !== undefined && board[y + n][x + n] === 2 / turnColor) {
          n++;
        }

        if (board[y + n][x + n] !== undefined && board[y + n][x + n] === turnColor) {
          for (let k = 1; k < n; k++) {
            newBoard[y + k][x + k] = turnColor;
          }
          newBoard[y][x] = turnColor;
          setTurnColor(2 / turnColor);
        }
      }
    }

    setBoard(newBoard);
  };
  return (
    <div className={styles.container}>
      <h2>現在のターン：{turnColor === 1 ? '黒' : '白'}</h2>
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
