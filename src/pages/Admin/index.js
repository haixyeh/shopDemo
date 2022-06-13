import React, { useCallback, useEffect } from 'react';
import { Formik } from 'formik';
import { Input, Button, Form, Popover, Col } from 'antd';
import { connect } from 'dva';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import CustomTable from '@@/CustomModal';
import PageTotal from '@@/PageTotal';


const valuesScheme = Yup.object().shape({
    email: Yup
        .string()
        .email('請輸入完整Email格式')
        .required('此欄位必填')
        .typeError('請輸入完整Email格式'),
    password: Yup
        .string()
        .max(20, '長度不可超過20字元')
        .required('此欄位必填')
})
const colConfig = {
    xs:24,
    sm:12,
    md:8,
    lg:6
};

const form = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    /* and other goodies */
    }) => (
    <Form>
        <div>
            <Col {...colConfig}>
                <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && touched.email && errors.email}
            </Col>
            <Col {...colConfig}>
                <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {errors.password && touched.password && errors.password}
            </Col>
        </div>
        <Button type="primary" disabled={isSubmitting} onClick={handleSubmit}>
            搜尋
        </Button>
    </Form>
);
const TableConfig = [
    {
        title: '編號',
        width: 80,
        dataIndex: 'id',
    },
    {
        title: '姓名',
        width: 150,
        dataIndex: 'name',
    },
    {
        title: '年齡',
        width: 150,
        dataIndex: 'age',
    },
    {
        title: '地址',
        width: 150,
        dataIndex: 'address',
    }
]

const genPageData = ({
    total,
    currentPage,
    limit,
    query
    }) => ({
        hideOnSinglePage: +total === 0,
        showSizeChanger: true,
        showQuickJumper: true,
        position: 'bottom',
        current: parseInt(currentPage, 10) || 1,
        total: parseInt(total, 10) || 1,
        pageSize: parseInt(limit, 10) || 20,
        pageSizeOptions: ['20', '50', '100', '200', '500'],
        showTotal: total => (
            <PageTotal total={Number(query?.limit) ? Math.ceil(total / query?.limit) : 1} />
        ),
});

const text = <span>Popover</span>;
const content = (
  <div>
    <p>專業、自信、優秀</p>
    <p>Content</p>
  </div>
);




const Index = (props) => {
    const { name, dispatch, query, listData, info } = props;

    useEffect(() => {
        return () => {
            dispatch({
                type: 'admin/save',
                payload: {}
            })
        }
    }, [])

    const onSubmit = (values, { setSubmitting }) => {
        const { dispatch } = props;
        setTimeout(() => {
            dispatch({
                type: 'admin/save',
                payload: values
            })
            // alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    }

    return (
        <div>
            <h1>{name} - Anywhere in your app!</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={valuesScheme}
                onSubmit={onSubmit}
                >
                    {form}
            </Formik>
            
            {JSON.stringify(query)}
            <CustomTable
                columns={TableConfig}
                dataSource={listData}
                pagination={genPageData(Object.assign({}, info, query))}
                rowKey="id"
                scroll={{ x: 500 }}
                scrollable
            />
            <Popover placement="bottomRight" title={text} content={content} trigger="click">
                <Button>RyanYeh</Button>
            </Popover>
        </div>
    );
}

Index.propTypes = {
    name: PropTypes.string,
    save: PropTypes.func,
    query: PropTypes.object,
    listData: PropTypes.array.isRequired,
    info: PropTypes.object.isRequired
}
Index.defaultProps = {
    name: 'Ryan',
    save: () => {},
    query: {}
}

const mapStateToProps = (state) => {
    return {
        name: state.admin.name,
        save: state.admin.save,
        query: state.admin.query,
        listData: state.admin.listData,
        info: state.admin.info
    }
}
// export default connect(({ home }) => ({ ...home }))(Home);
export default connect(mapStateToProps)(Index);
