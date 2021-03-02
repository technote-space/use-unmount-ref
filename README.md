# useUnmountRef

[![npm version](https://badge.fury.io/js/%40technote-space%2Fuse-unmount-ref.svg)](https://badge.fury.io/js/%40technote-space%2Fuse-unmount-ref)
[![CI Status](https://github.com/technote-space/use-unmount-ref/workflows/CI/badge.svg)](https://github.com/technote-space/use-unmount-ref/actions)
[![codecov](https://codecov.io/gh/technote-space/use-unmount-ref/branch/master/graph/badge.svg)](https://codecov.io/gh/technote-space/use-unmount-ref)
[![CodeFactor](https://www.codefactor.io/repository/github/technote-space/use-unmount-ref/badge)](https://www.codefactor.io/repository/github/technote-space/use-unmount-ref)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/technote-space/use-unmount-ref/blob/master/LICENSE)

React hook to handle unmount ref.

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Details</summary>

- [Usage](#usage)
  - [Install](#install)
  - [Use](#use)
- [Author](#author)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Usage
### Install
`yarn add @technote-space/use-unmount-ref`

or

`npm i @technote-space/use-unmount-ref`

### Use

e.g.
```tsx
import type { FC } from 'react';
import { useEffect, useState } from 'react';
import useUnmountRef from '@technote-space/use-unmount-ref';

const TestPage: FC = () => {
  const unmountRef = useUnmountRef();
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if(!unmountRef.current) {
        setIsLoading(false);
      }
    }, 1000);
  }, []);
  
  return <div>
    {isLoading ? 'Loading...' : 'Not loading.'}
  </div>
};
```

## Author
[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)
