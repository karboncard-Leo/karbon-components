import { Space, Tabs, TabsProps } from 'antd';
import React, { useCallback } from 'react';
import { Container } from './style';
import { getClassPrefix } from 'utils/class';
import classNames from 'classnames';

const { TabPane } = Tabs;

export interface BasePageContainerProps {
  /**
   * @description 标题
   */
  title: React.ReactNode | string;
  /**
   * @description antd 的 tabs 组件
   */
  tabs: Array<{ tab: React.ReactNode; key: string }>;
  /**
   *
   * @description 右侧扩展按钮
   */
  extra: Array<React.ReactNode>;
  /**
   * @description antd 的 tabs 组件的 props 传值
   */
  tabProps: TabsProps;
}
export type PageContainerProps = Partial<
  BasePageContainerProps & Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
>;

const PageContainer: React.FC<PageContainerProps> = (props) => {
  const { title, tabs, extra, tabProps, className, ...restProps } = props;

  const getClass = useCallback(
    (_className: string = '') => `${getClassPrefix()}_page_container${_className}`,
    [],
  );
  const classes = classNames(getClass(), className);

  return (
    <Container className={classes} {...restProps}>
      {(title || extra) && (
        <header>
          {title && (
            <div className={typeof title === 'string' ? getClass('_title') : ''}>{title}</div>
          )}

          {extra && (
            <div className={getClass('_extra')}>
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
      <div className={getClass('_content')}>{props.children}</div>
    </Container>
  );
};

export default PageContainer;
