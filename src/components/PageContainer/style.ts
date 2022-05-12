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
    font-weight: 400;
    font-size: 24px;
    font-family: 'Roboto Medium';
    line-height: 2;
  }

  .karbon_page_container_extra {
    align-self: flex-end;
  }
  .ant-tabs-tab {
    padding-top: 0;
  }
  .karbon_page_container_content {
    padding: 24px;
    background-color: white;
  }
`;
