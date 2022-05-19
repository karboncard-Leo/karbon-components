import React from 'react';
import { IframeDownLoad } from './IframeDownLoad';
import { FileRequestDownLoad } from './RequestDownLoad';
import { IframeType } from './IframeDownLoad/index';

const UseDownLoad = () => {
  const IframeDownLoadWay = () => IframeDownLoad({ url: 'www.baidu.com' });

  const FileRequestDownLoadWay = () => FileRequestDownLoad('url', 'arrayBuffer');

  return {
    IframeDownLoadWay,
    FileRequestDownLoadWay,
  };
};

export default UseDownLoad;
