### Responsive Web Devlopment
  - `Landscape screen` -  ***height > width*** 
  - `Portrait screen` -  ***width > height***

    - `Absolute unit` - 
    `px` - ***fixed and doesnt scale***
    - `Relative unit` - 
    `em` - ***Relative to the front size of the parent.*** (*scales with the parent element*)
    `rem` - ***Relative to the root element's font-size.*** (*scales with the root element*). (*1 rem is 16 pixels*)
    `%` - ***Relative to the parent element's size.***
    - `Viewport unit` - 
    `vw, vh` - ***1% of the viewport width, height respectively.*** (*scales with the viewport (`vw` depending on screen width and height not parent div (`vw` changes my screen width and vh changes by screen height))*)
    `vmin, vmax` - ***1% of the viewport's minimul/maximum dimension.*** (*vmin takes the smaller dimension and vmax takes the larger dimension*)(*vmax - if vh > vw then it chnages vh, if vw > vh then it changes vw according to the screen, vmin - if vh > vw then it chnages vw, if vw > vh then it changes vh according to the screen*)
    `ch` - ***Relative to the width of the "0" (zero) character.*** (*ch is the width of the character 0*) (*used in letters contained div*)  
    `lh` - ***Relative to the line height of the element.*** (*lh is the height of the line*) (e.g., used in margin)

      - `DPR` *stands for* `Device Pixel Ratio`

    - *`align-items` works in y axis (cross axis) that is column*

    - `justify-content` *works in x axis (main axis) that is row*
        - `space-between`
        - `space-around`
        - `space-evenly`
    - `justify-self`
           
      - `flex-wrap`
      - `flex-shrink`: `0`;
      - `flex-direction`
  - `display: grid`
    - `grid-template-columns`
    - `grid-template-rows`
    - `grid-auto-flow:` `row` **or** `column` **or** `dense`

  - ```@media (condition) and (condition) {}```
    - `max-width`        `and` `min-width`
    - `orientation`: `landscape` **or** `portrait`

  `Tailwind`
  - `lg: 1024px`
  - `md: 768px`
  - `sm: 640px`
  - `xl: 1280px`
  - `2xl: 1536px`
    

`Note:` *Tailwind's font-[] syntax only works if the font is already loaded into the browser.*