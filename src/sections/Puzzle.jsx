import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, RotateCcw, Trophy, Heart } from 'lucide-react';

const SOLVED_BOARD = [0, 1, 2, 3, 4, 5, 6, 7, 8];

export const Puzzle = () => {
  const [board, setBoard] = useState(SOLVED_BOARD);
  const [moves, setMoves] = useState(0);
  const [isSolved, setIsSolved] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Puzzle picture path
  const puzzleImage = "/images/chibi/chibi_holding_hands_van.png";

  const getEmptyIndex = (currentBoard) => currentBoard.indexOf(8);

  const getValidMoves = (emptyIdx) => {
    const row = Math.floor(emptyIdx / 3);
    const col = emptyIdx % 3;
    const valid = [];
    if (row > 0) valid.push(emptyIdx - 3); // Up
    if (row < 2) valid.push(emptyIdx + 3); // Down
    if (col > 0) valid.push(emptyIdx - 1); // Left
    if (col < 2) valid.push(emptyIdx + 1); // Right
    return valid;
  };

  const shufflePuzzle = () => {
    let current = [...SOLVED_BOARD];
    let prevEmpty = -1;
    // Perform 30 random valid sliding moves to guarantee it's solvable
    for (let i = 0; i < 30; i++) {
      const emptyIdx = current.indexOf(8);
      const valid = getValidMoves(emptyIdx).filter((idx) => idx !== prevEmpty);
      const moveIdx = valid[Math.floor(Math.random() * valid.length)];
      prevEmpty = emptyIdx;
      // Swap
      [current[emptyIdx], current[moveIdx]] = [current[moveIdx], current[emptyIdx]];
    }
    setBoard(current);
    setMoves(0);
    setIsSolved(false);
    setHasStarted(true);
  };

  const handleTileClick = (index) => {
    if (isSolved) return;
    const emptyIdx = getEmptyIndex(board);
    const valid = getValidMoves(emptyIdx);

    if (valid.includes(index)) {
      const newBoard = [...board];
      [newBoard[emptyIdx], newBoard[index]] = [newBoard[index], newBoard[emptyIdx]];
      const nextMoves = moves + 1;
      setBoard(newBoard);
      setMoves(nextMoves);

      // Check if solved
      const solved = newBoard.every((val, i) => val === i);
      if (solved && hasStarted) {
        setIsSolved(true);
        triggerWinCelebration();
      }
    }
  };

  const triggerWinCelebration = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#5BA8E8', '#B8DCFA', '#FFFFFF', '#38A3F1']
      });
    } catch (e) {
      console.log("Confetti trigger:", e);
    }
  };

  return (
    <section id="puzzle" style={{
      padding: '80px 20px',
      position: 'relative',
      background: 'linear-gradient(180deg, rgba(235, 244, 252, 0.4) 0%, rgba(212, 236, 255, 0.3) 100%)'
    }}>
      <div className="container-narrow" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
        {/* Header */}
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 16px',
          background: 'var(--color-bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-full)',
          fontSize: '11px',
          fontWeight: '700',
          color: 'var(--color-primary-dark)',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '10px'
        }}>
          <Sparkles size={13} color="var(--color-primary)" />
          Fun & Love Mini Game
        </span>

        <h2 style={{
          fontFamily: 'var(--font-heading)',
          fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
          fontWeight: '800',
          color: 'var(--color-text-navy)',
          lineHeight: 1.2
        }}>
          Interactive Love Puzzle 🩵
        </h2>

        <p style={{
          fontFamily: 'var(--font-handwritten)',
          fontSize: 'clamp(1.15rem, 3.8vw, 1.4rem)',
          color: 'var(--color-text-charcoal)',
          marginTop: '6px',
          marginBottom: '24px'
        }}>
          Namma college van memory picture ah join panni solve pannu sakkaraiii!
        </p>

        {/* Puzzle Status Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          marginBottom: '20px'
        }}>
          <span style={{
            fontSize: '13px',
            fontWeight: '700',
            color: 'var(--color-primary-dark)',
            padding: '6px 16px',
            background: '#FFFFFF',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--border-color)'
          }}>
            Moves: {moves}
          </span>

          <button
            onClick={shufflePuzzle}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '7px 18px',
              background: 'var(--color-primary)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 'var(--radius-full)',
              fontSize: '13px',
              fontWeight: '700',
              cursor: 'pointer',
              boxShadow: '0 4px 12px rgba(91, 168, 232, 0.35)'
            }}
          >
            <RotateCcw size={14} />
            <span>{hasStarted ? "Re-shuffle" : "Shuffle Puzzle 🩵"}</span>
          </button>
        </div>

        {/* 3x3 PUZZLE BOARD CONTAINER */}
        <div style={{
          width: 'clamp(280px, 85vw, 360px)',
          height: 'clamp(280px, 85vw, 360px)',
          margin: '0 auto',
          padding: '8px',
          background: '#FFFFFF',
          borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-lg), var(--shadow-glow)',
          border: '2px solid var(--color-primary)',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          gap: '4px',
          position: 'relative'
        }}>
          {board.map((tileVal, idx) => {
            const isEmpty = tileVal === 8;
            const origRow = Math.floor(tileVal / 3);
            const origCol = tileVal % 3;

            return (
              <div
                key={idx}
                onClick={() => handleTileClick(idx)}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '6px',
                  backgroundColor: isEmpty ? 'var(--color-secondary-soft)' : '#FFFFFF',
                  backgroundImage: isEmpty ? 'none' : `url(${puzzleImage})`,
                  backgroundSize: '300% 300%',
                  backgroundPosition: `${origCol * 50}% ${origRow * 50}%`,
                  cursor: isEmpty ? 'default' : 'pointer',
                  border: isEmpty ? '1.5px dashed var(--color-primary)' : '1px solid rgba(255, 255, 255, 0.6)',
                  boxShadow: isEmpty ? 'none' : '0 2px 6px rgba(21, 43, 68, 0.08)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  userSelect: 'none'
                }}
              >
                {isEmpty && (
                  <span style={{ fontSize: '20px', opacity: 0.6 }} className="animate-pulse-heart">🩵</span>
                )}
              </div>
            );
          })}
        </div>

        {/* Solved Celebration Card */}
        {isSolved && (
          <div style={{
            marginTop: '24px',
            padding: '20px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-cream)',
            border: '2px solid var(--color-primary)',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
              <Trophy size={22} color="var(--color-primary)" />
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: '800' }}>
                Super Dii Sakkaraiii! 🩵
              </h3>
            </div>
            <p style={{ fontFamily: 'var(--font-handwritten)', fontSize: '1.25rem', color: 'var(--color-text-navy)', fontWeight: '700' }}>
              "Namma love puzzle ah {moves} moves la azhaga solve pannita! You are the smartest and sweetest girl in the world! 🩵"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

