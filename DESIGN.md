# Design notes

## typography

For the typography, the display text will be h1 and the h1 will be h2, this is because the h1 can be used in multible locations, and the display not.

## responsive design

- The web application is implemented with a responsive design, ranging from 375px wide until 1440px wide according to the design in Figma
- Filters have a visual active state

### rems

- padding left and right mobile: 1.5rem
- padding left and right web: 2.5rem
- padding top mobile: 2.5rem
- padding top web: 3.5
- gap from logo to main content web: 3rem
- gap from logo to main content app: 1.5rem
- padding main content: 1.5rem
- grid gutter web: 1.25rem
- gap between items in components app: 0.625rem
- gap between items in components web: 1.25rem

### grids

- mobile 375px with 4 grids
- web 1440px with 16 grids

## svg logo

turn the logo into a react component using SVGR Playground, that way i can change the svgs color, width and height
