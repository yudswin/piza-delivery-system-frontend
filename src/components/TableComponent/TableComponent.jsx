import React from 'react';
import { Space, Table } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

const TableComponent = (props) => {

    const { selectionType = 'checkbox', foods = [], isLoading = false } = props

    const columns = [
        {
            title: 'Food Name',
            dataIndex: 'name',
            render: (text) => <>{text}</>
        },
        {
            title: 'Price',
            dataIndex: 'price'
        },
        {
            title: 'Rating',
            dataIndex: 'rating'
        },
        {
            title: 'Type',
            dataIndex: 'type'
        },
        {
            title: '',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <EditOutlined style={{ color: 'blue' }} />
                    <DeleteOutlined style={{ color: 'red' }} />
                </Space>
            ),
        },
    ];

    const data = foods?.map((food) => {
        return { ...food, key: food?._id }
    })
    console.log('data', data)

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };


    return <Table
        rowSelection={{
            type: selectionType,
            ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
    />;
};

export default TableComponent;