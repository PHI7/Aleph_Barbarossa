import React from 'react';
import { motion } from 'framer-motion';

function IvoryCoinPresentation() {
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
              transform: 'translateZ(1px)'
            }}
          >
            <img 
              src="https://ipfs.io/ipfs/bafybeiboyknv7pfnzj6tsqoajyxlybdun2l6zk6pcpxtjf22iv3s2cwqky"
              alt="Elfenbein Coin Vorderseite"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Back Side */}
          <div 
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg) translateZ(1px)',
              background: 'linear-gradient(135deg, #f9f6ee 0%, #f5f2e6 50%, #ede8d8 100%)'
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
                  rgb(${249 - i * 3}, ${246 - i * 3}, ${238 - i * 3}), 
                  rgb(${237 - i * 3}, ${232 - i * 3}, ${216 - i * 3}))`,
                border: '1px solid #c70035'
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default IvoryCoinPresentation;
