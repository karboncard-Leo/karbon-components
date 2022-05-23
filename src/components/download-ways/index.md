# ApplyCardModal 申请卡弹窗

## 基本使用

```tsx
import React from 'react';
import { IframeType } from './IframeDownLoad/index';
import { Button } from 'antd';
import downloadWays from './index';
export default () => {
  const { IframeDownLoadWay, FileRequestDownLoadWay } = downloadWays();

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          IframeDownLoadWay({ url: 'xxx' });
        }}
      >
        download
      </Button>

      <Button
        type="primary"
        onClick={() => {
          FileRequestDownLoadWay({ url: 'xxx' });
        }}
      >
        download2
      </Button>
    </>
  );
};
```
