function takeANumber(line, name) {
  console.log(line)
  line = line.push(name)
  console.log(line)
  return `Welcome, ${name}. You are number ${line.length} in line.`
}