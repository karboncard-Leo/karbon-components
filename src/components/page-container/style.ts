import styled from 'styled-components';
export const Container = styled.section`
  &.karbon_page_container {
    height: 100%;
    padding: 24px;

    > header {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
    }
    .karbon_page_container_title {
      font-weight: 400;
      font-size: 24px;
      font-family: 'Roboto Medium';
    }

    .karbon_page_container_extra {
      align-self: flex-end;
    }
    .ant-tabs-tab {
      padding-top: 0;
    }
    .ant-tabs-tab-active .ant-tabs-tab-btn {
      color: rgba(0, 0, 0, 0.85);
    }
    .ant-tabs-tab .ant-tabs-tab-btn {
      color: rgba(0, 0, 0, 0.45);
    }
    .ant-tabs-ink-bar {
      border: 1px solid #000000;
    }
    .karbon_page_container_content {
      padding: 24px;
      background-color: white;
    }
  }

  @media (max-width: 768px) {
    &.karbon_page_container {
      padding-right: 0;
      padding-left: 0;
      > header,
      > div:nth-of-type(1) {
        padding-right: 24px;
        padding-left: 24px;
      }
    }
    .karbon_page_container_content {
      padding: 16px 24px;
    }
  }
`;
