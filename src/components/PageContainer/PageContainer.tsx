import { Space, Tabs, TabsProps } from 'antd';
import React, { useCallback } from 'react';
import { Container } from './style';
import { getClassPrefix } from 'utils/class';

const { TabPane } = Tabs;

interface BasePageContainerProps {
  title: React.ReactNode | string;
  tabs: Array<{ tab: React.ReactNode; key: string }>;
  extra: Array<React.ReactNode>;
  tabProps: TabsProps;
}
type PageContainerProps = Partial<BasePageContainerProps>;

const PageContainer: React.FC<PageContainerProps> = (props) => {
  const { title, tabs, extra, tabProps } = props;

  const getClass = useCallback(
    (className?: string) => `${getClassPrefix()}page_container_${className}`,
    [],
  );
  return (
    <Container className={getClass()}>
      {(title || extra) && (
        <header>
          {title && (
            <div className={typeof title === 'string' ? getClass('title') : ''}>{title}</div>
          )}

          {extra && (
            <div className={getClass('extra')}>
              <Space>{extra}</Space>
            </div>
          )}
        </header>
      )}

      {tabs && (
        <Tabs {...tabProps}>
          {tabs.map(({ tab, key }) => (
            <TabPane tab={tab} key={key} />
          ))}
        </Tabs>
      )}
      <div className={getClass('content')}>{props.children}</div>
    </Container>
  );
};

export default PageContainer;
