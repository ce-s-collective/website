import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "CE Collective",
  DESCRIPTION: "Welcome to CE Collective, a blog for engineers and designers.",
  AUTHOR: "Yu Chen",
}

// Focus Page
export const Focus: Page = {
  TITLE: "Focus",
  DESCRIPTION: "Current focus projects.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "", 
  },
  { 
    TEXT: "Focus", 
    HREF: "focus", 
  },
  { 
    TEXT: "Blog", 
    HREF: "blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "mail", 
    TEXT: "yuwork1018@gmail.com",
    HREF: "yuwork1018@gmail.com",
  },
  { 
    NAME: "Author",
    ICON: "author",
    TEXT: "yu chen",
    HREF: "https://github.com/yuchen818"
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "ce's collective",
    HREF: "https://github.com/ce-s-collective"
  },
]

