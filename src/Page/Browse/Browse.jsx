import React from 'react'
import './Browse.css'

function Browse() {
    const categories = [
    { name: "Hindi Songs", color: "linear-gradient(135deg, #FF512F 0%, #DD2476 100%)", icon: "🇮🇳" },
    { name: "English Songs", color: "linear-gradient(135deg, #1FA2FF 0%, #12D8FA 50%, #A6FFCB 100%)", icon: "🌐" },
    { name: "Sad Songs", color: "linear-gradient(135deg, #232526 0%, #414345 100%)", icon: "🌧️" },
    { name: "Punjabi Beats", color: "linear-gradient(135deg, #FF9966 0%, #FF5E62 100%)", icon: "🔥" },
    { name: "Party Hits", color: "linear-gradient(135deg, #F7971E 0%, #FFD200 100%)", icon: "🎉" },
    { name: "Workout & Gym", color: "linear-gradient(135deg, #8A2387 0%, #E94057 50%, #F27121 100%)", icon: "⚡" },
    { name: "Romantic / Lofi", color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", icon: "❤️" },
    { name: "Chill & Relax", color: "linear-gradient(135deg, #00B4DB 0%, #0083B0 100%)", icon: "🎧" }
    ];

  return (
    <div className='browse-page'>
      <div className='browse-container'>
        <h2>Browse All Categories</h2>
      </div>
      <div className='categories-grid'>
        {categories.map((item,index) => (
            <div
              key={index}
              className='category-card'
              style={{ background: item.color }}
            >
                <span className='category-icon'>{item.icon}</span>
                <h3 className='category-name'>{item.name}</h3>
            </div>  
        ))}
      </div>
    </div>
  )
}

export default Browse
