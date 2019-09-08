---
title: Dev Test
date: 2019-09-08
path: /blog/002-dev-test
summary: A quick test of coding features for this blog
---

# Writing your own VS Code snippets to move faster

Snippets are a fantastic way to boost your productivity by automating the writing of common boilerplate, but until recently I assumed that creating my own must be a really convoluted process. It turns out this really isn't the case, and creating snippets can be just as fast as writing the boilerplate! In this post I aim to give a quick intro to snippets in VS Code, so your can start using them in your projects.


### Motivations

As a React developer, serial contributors such as AirBnB have already [released](https://marketplace.visualstudio.com/items?itemName=cobeia.airbnb-react-snippets) some fantastic collections, but every company uses different tools and has a different style or opinions. For instance `rfunc` creates this:

```jsx
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function MyComponent(props) {
  return (
    <React.Fragment>
      
    </React.Fragment>
  );
}

MyComponent.propTypes = propTypes;

MyComponent.defaultProps = defaultProps;
```

For me this breaches some opinions, and lacks some business specific features:

* Why do propTypes/defaultProps need declaring at the top and assigning later? 
* Why is Fragment declared explicitly? Actually why include it to begin with at-all?
* I usually destructure and default prop values inside the constructor and avoid `defaultProps` because I find it cleaner and is theoretically more performant
* I prefer not to use default exports, as it makes auto-refactoring less reliable, and permits team members to name components wrong
* I still need to manually import styled components and my team's component library. 

While most of these are very opinionated, it's quite laborious to clean up when you're creating modern React components frequently. I would much rather have something like this:

```jsx
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import {} from 'src/lib'

export function MyComponent({}) {
  return (
    {/* Mouse should start here */}
  )
}

MyComponent.propTypes = {}
```

### VS Code configuration

<!-- Stuff -->

### Creating the snippet

<!-- Stuff -->

### Conclusion

<!-- Stuff -->
