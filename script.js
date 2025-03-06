const lunches = [];

function addLunchToEnd(items, item) {
  console.log(`${item} added to the end of the lunch menu.`);
  items.push(item);
  return items;
}

function addLunchToStart(items, item) {
  console.log(`${item} added to the start of the lunch menu.`);
  items.unshift(item);
  return items;
}

function removeLastLunch(lunches) {
  const lastElementRemoved = lunches.pop();
  lastElementRemoved
    ? console.log(
        `${lastElementRemoved} removed from the end of the lunch menu.`
      )
    : console.log("No lunches to remove.");
  return lunches;
}

function removeFirstLunch(items) {
  if (items.length <= 0) {
    console.log("No lunches to remove.");
  } else {
    const firstItem = items.shift();
    console.log(`${firstItem} removed from the start of the lunch menu.`);
  }
  return items;
}

function getRandomLunch(items) {
  if (items.length <= 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * items.length);
    console.log(`Randomly selected lunch: ${items[randomIndex]}`);
  }
}

function showLunchMenu(items) {
  if (items.length <= 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${items.join(", ")}`);
  }
}

console.log(showLunchMenu(["Pizza", "Tacos"]));
