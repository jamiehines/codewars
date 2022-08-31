const likes = names => [
    'no one likes this',
    `${names[0]} likes this`,
    `${names.join(' and ')} like this`,
    `${names[0]}, ${names[1]} and ${names[2]} like this`,
    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
][Math.min(4, names.length)]