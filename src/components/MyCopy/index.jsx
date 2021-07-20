import React,{useState} from "react";
import copy from 'copy-to-clipboard'
import {CheckOutlined, CopyOutlined} from "@ant-design/icons";
import {Tooltip} from "antd";

export default ({text})=>{

  const [copied,setCopied] = useState(false)

  return (<span style={{marginLeft:5}}>
    {copied ?
      <Tooltip title={'复制成功'}><CheckOutlined style={{color:'#52c41a'}} /></Tooltip> :
      <Tooltip title={'复制'}><CopyOutlined style={{color:'#1890ff'}} onClick={(e)=>{
        e.stopPropagation()
        copy(text)
        setCopied(true)
        setTimeout(()=>setCopied(false),2000)
      }} /></Tooltip>}
  </span>)
}
