# PageContainer 页容器

## 基本使用

```tsx
import React from 'react';
import { PageContainer } from 'karbon-components';
import { Button } from 'antd';
export default () => (
  <PageContainer
    title="Transactions"
    tabs={[
      { tab: 'Successful Transactions', key: '1' },
      { tab: 'Rejected Transactions ', key: '2' },
    ]}
    tabProps={{
      defaultActiveKey: '1',
    }}
    extra={[
      <Button type="primary" key="1">
        按钮1
      </Button>,
      <Button key="2">按钮2</Button>,
    ]}
  >
    我是内容
  </PageContainer>
);
```

<API src='./PageContainer.tsx'>
