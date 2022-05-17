import styled from 'styled-components';

export const Container = styled.section`
  padding: 24px;
  height: 100%;
  > header {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
  .karbon_page_container_title {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    font-size: 24px;
    font-family: 'Roboto';
    font-style: normal;
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
  @media (max-width: 768px) {
    .karbon_page_container_title {
      font-size: 1.25rem;
    }
  }
`;
