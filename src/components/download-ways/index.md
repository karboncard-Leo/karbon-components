# ApplyCardModal 申请卡弹窗

## 基本使用

```tsx
import React from 'react';
import { Button } from 'antd';
import UseDownLoadWays from './RequestDownLoad/index';

export default () => {
  const onprocess = (v1: number, v2: number) => {
    console.log(v1, v2);
  };

  const onsuccess = () => {
    console.log(123);
  };
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          UseDownLoadWays().IframeDownLoadWay({ url: 'wwww' });
        }}
      >
        download
      </Button>

      <Button
        disabled
        type="primary"
        onClick={() => {
          UseDownLoadWays().FileDownPercent({ url: 'www', onprocess, onsuccess });
        }}
      >
        download2
      </Button>
    </>
  );
};
```

## API

[参考 Antd-Modal.method](<https://ant.design/components/modal-cn/#Modal.method()>)
