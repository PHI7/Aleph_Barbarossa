import React from 'react';
import { motion } from 'framer-motion';

function CoinPresentation() {
  return (
    <div className="relative w-full h-full bg-transparent flex items-center justify-center">
      {/* Coin Container */}
      <div className="relative" style={{ perspective: '1000px' }}>
        <motion.div
          className="relative preserve-3d"
          style={{
            width: '320px',
            height: '320px',
            transformStyle: 'preserve-3d'
          }}
          animate={{
            rotateY: [0, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* Front Side */}
          <div 
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'translateZ(1px)',
              boxShadow: '0 0 25px rgba(251, 191, 36, 0.7), 0 0 50px rgba(245, 158, 11, 0.5)'
            }}
          >
            <img 
              src="https://ipfs.io/ipfs/bafybeibtqhphuojqvz4rivsyflgbham4qsudva3r2t5cg2he765b33xtje"
              alt="Löwen Coin Vorderseite"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Back Side */}
          <div 
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg) translateZ(1px)',
              background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
              boxShadow: '0 0 30px rgba(251, 191, 36, 0.8), 0 0 60px rgba(245, 158, 11, 0.6)'
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-6xl animate-glow">✨</div>
            </div>
          </div>

          {/* Coin Edge Layers */}
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{
                transform: `translateZ(-${i + 2}px)`,
                height: '320px',
                width: '320px',
                background: `linear-gradient(to bottom, 
                  rgb(${251 - i * 8}, ${191 - i * 6}, ${36 - i * 2}), 
                  rgb(${217 - i * 8}, ${119 - i * 6}, ${6 - i * 1}))`,
                border: '1px solid rgba(146, 64, 14, 0.3)'
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default CoinPresentation;
