category = Category.create!(
  name: "Featured",
  color: "#000000"
)

Note.create!(
  [
    {
      title: "Red (Taylor's Version)",
      body: "Loving him is like driving a new Maserati down a dead-end street...",
      category: category
    },
    {
      title: "All Too Well (Taylor's Version)",
      body: "It was rare, I was there, I remember it all too well",
      category: category
    },
    {
      title: "We Are Never Ever Getting Back Together (Taylor's Version)",
      body: "You go talk to your friends, talk to my friends, talk to me",
      category: category
    },
    {
      title: "Begin Again (Taylor's Version)",
      body: "But on a Wednesday in a café, I watched it begin again",
      category: category
    }
  ]
)
