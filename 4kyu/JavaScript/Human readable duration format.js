function formatDuration (seconds) {
  
    if (seconds === 0) return 'now'

    const durations = [
        { scale: 'year', amount: 31536000 }, 
        { scale: 'day', amount: 86400 }, 
        { scale: 'hour', amount: 3600 }, 
        { scale: 'minute', amount: 60 }, 
        { scale: 'second', amount: 1 }
    ]
    
    const values = []
    durations.forEach(duration=>{
      const value = Math.floor(seconds/duration.amount)
      if (value > 0) values.push(`${value} ${duration.scale}${value > 1 ? 's' : ''}`)
      seconds-=value*duration.amount
    })
    
    return values.length > 1 ? values.join(', ').replace(/,([^,]*)$/,' and'+'$1') : values[0] 
}  
