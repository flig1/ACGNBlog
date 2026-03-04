---
title: 金蝶云星空IDynamicFormModel接口
published: 2026-02-06
description: '金蝶云星空IDynamicFormModel接口学习'
image: ''
tags: ['金蝶云星空']
category: '金蝶云星空'
draft: false 
lang: ''
---

# IDynamicFormModel接口复习文档

## 1. 接口概述

### 1.1 基本概念

IDynamicFormModel接口是金蝶云星空BOS二次开发中用于管理动态表单数据模型的核心接口，广泛应用于插件、操作、表单服务等需要存取表单数据的模块。

### 1.2 应用场景

- 单据维护插件(AbstractDynamicFormPlugIn)中，通过`Model`属性访问IDynamicFormModel实例
- 需要对表单数据进行读写操作的任何场景
- 实现复杂业务逻辑的数据处理
- 跨表单数据传递和处理

### 1.3 核心价值

- 统一的数据访问接口，简化数据操作
- 支持复杂的业务逻辑实现
- 提供丰富的方法和属性，满足各种数据处理需求
- 与BOS平台深度集成，充分利用平台能力

## 2. 公共属性详解

### 2.1 BillBusinessInfo

**功能**：当前界面所管理的单据元数据对象

**语法**：`BusinessInfo BillBusinessInfo { get; }`

**备注**：对于单据维护界面，此属性是本单的元数据；对于列表界面，此属性是列表界面展示的单据元数据。

**常用属性**：

- `Elements`：返回单据上的全部元素，包括全部字段、实体
- `Entrys`：返回单据上的全部实体
- `MainOrgField`：返回单据的主业务组织字段

**常用方法**：

- `GetBillNoField()`：获取单据编号字段，如果是基础资料，则返回基础资料编码
- `GetEntity(string key)`：获取单据的实体元数据
- `GetField(string key)`：获取单据字段元数据
- `GetForm()`：获取单据整体属性元数据

### 2.2 BusinessInfo

**功能**：当前界面对应的元数据对象

**语法**：`BusinessInfo BusinessInfo { get; }`

**备注**：与BillBusinessInfo属性相反，本属性为当前界面的元数据对象，而BillBusinessInfo为当前界面所管理的单据的元数据对象。

### 2.3 Context

**功能**：上下文对象

**语法**：`Context Context { get; }`

**备注**：记录了与数据中心的连接，在调用各种K/3 Cloud提供的服务时，均需要传入本对象；还记录了当前用户、语言等信息。

**常用属性**：

- `ClientType`：客户端类型
- `CurrentOrganizationInfo`：当前组织信息
- `LoginName`：登录用户名
- `UserId`：登录用户内码
- `UserName`：登录用户名

### 2.4 DataChanged

**功能**：界面上的数据包是否被改动

**语法**：`bool DataChanged { get; set; }`

**备注**：动态表单加载完毕，数据绑定到界面上之后，此属性被重置为false；用户修改了界面上字段值，此属性更改为true；用户保存单据后，此属性会被重置为false。

### 2.5 DataObject

**功能**：界面的后台数据包对象

**语法**：`DynamicObject DataObject { get; set; }`

**备注**：通常通过Model对象提供的方法来读取、更新字段值，无需直接访问此属性。特别注意：通过访问DataObject对象来更新字段值，不会触发字段的值改变事件。

### 2.6 FunctionLib

**功能**：支持实体规则运算的函数库

**语法**：`FunctionManage FunctionLib { get; }`

**备注**：只有函数库中注册过的函数，才能被实体服务规则的前置条件、计算公式等引用，并顺利解析。

### 2.7 OpenParameter

**功能**：显示当前界面时传入的参数

**语法**：`DynamicFormOpenParameter OpenParameter { get; set; }`

**备注**：可以从此属性中，获取本界面的打开模式，以及定制参数等。

### 2.8 ParameterData

**功能**：单据选项数据包

**语法**：`DynamicObject ParameterData { get; set; }`

**备注**：可以从此数据包中，获取用户配置各个单据选项值。

### 2.9 SubSytemId

**功能**：子系统内码

**语法**：`string SubSytemId { get; set; }`

**备注**：为发布后单据所在的子系统，与BOS设计器中单据所在子系统有所差异。

### 2.10 UserTypes

**功能**：用户类型：普通用户、管理员

**语法**：`List<Core.Permission.UserType> UserTypes`

## 3. 公共方法详解

### 3.1 BeginIniti / EndIniti

**功能**：标记数据模型进入/结束初始化状态，避免触发字段值改变事件

**语法**：

- `void BeginIniti();`
- `void EndIniti();`

**备注**：此方法必须与EndIniti方法成对调用，否则界面将一直处于初始化状态，任何字段的改动，都不会触发值改变事件。

**应用场景**：

- 避免价格与含税单价之间的循环计算
- 批量设置多个字段值时，减少不必要的事件触发
- 提高性能，避免重复计算

### 3.2 单据体行操作方法

#### 3.2.1 CreateNewEntryRow

**功能**：向实体中增加一行，自动填写字段的默认值，并刷新到界面单据体表格

**语法**：

- `void CreateNewEntryRow(string key);`
- `void CreateNewEntryRow(Entity entity, int rowIndex);`

#### 3.2.2 BatchCreateNewEntryRow

**功能**：批量新建单据体行

**语法**：

- `void BatchCreateNewEntryRow(string key, int rowCount);`
- `void BatchCreateNewEntryRow(string key, DynamicObject rowDataEntity, int rowCount);`

**备注**：创建第一行成功之后，把第一行作为模板，批量复制产生出其他新行，提高性能。

#### 3.2.3 InsertEntryRow

**功能**：向单据体中插入新行，并放在指定行上

**语法**：`void InsertEntryRow(string key, int row);`

#### 3.2.4 DeleteEntryData

**功能**：清空指定单据体的全部行

**语法**：`void DeleteEntryData(string key);`

#### 3.2.5 DeleteEntryRow

**功能**：删除单据体的指定行

**语法**：`void DeleteEntryRow(string key, int row);`

#### 3.2.6 CopyEntryRow

**功能**：复制行

**语法**：`void CopyEntryRow(string key, int row, int newRow, bool isCopyLinkEntry = false);`

### 3.3 数据操作方法

#### 3.3.1 GetEntityDataObject

**功能**：获取指定单据体的全部行数据包集合，或者取指定单据体的行数据包

**语法**：

- `DynamicObjectCollection GetEntityDataObject(Entity entity);`
- `DynamicObject GetEntityDataObject(Entity entity, int row);`

#### 3.3.2 GetEntryCurrentRowIndex

**功能**：获取单据体当前焦点行号

**语法**：`int GetEntryCurrentRowIndex(string key);`

#### 3.3.3 TryGetEntryCurrentRow

**功能**：尝试返回单据体焦点行数据包、行号

**语法**：`bool TryGetEntryCurrentRow(string entryKey, out DynamicObject row, out int rowIndex);`

### 3.4 脏标志管理

#### 3.4.1 GetDirty

**功能**：获取单据数据包的脏标志状况

**语法**：`bool GetDirty();`

**备注**：如果单据数据包有更改，本方法即返回true；如果返回false，表示未新增、删除行，字段也没有修改过。

#### 3.4.2 ClearDirty

**功能**：清除整单数据包，或者所指定单据体行数据包中的脏标记

**语法**：

- `void ClearDirty();`
- `void ClearDirty(string entityKey, int row);`

### 3.5 其他实用方法

#### 3.5.1 CreateNewData

**功能**：新建空白数据包，并刷新界面；或者传入自行构建的数据包，刷新界面

**语法**：

- `void CreateNewData();`
- `void CreateNewData(DynamicObject newObject);`

#### 3.5.2 ImportEntry

**功能**：把指定的Excel文件，导入到对应的单据体中

**语法**：`void ImportEntry(string key, string uploadFile);`

#### 3.5.3 CopyEntryColumn

**功能**：把指定行的某字段值复制到整列

**语法**：`void CopyEntryColumn(string key, int row, string field);`

#### 3.5.4 ClearNoDataRow

**功能**：清除空行

**语法**：`void ClearNoDataRow();`

#### 3.5.5 GetBaseDataFieldByKey

**功能**：到单据元数据中，取指定基础资料字段的元数据

**语法**：`BaseDataField GetBaseDataFieldByKey(string key);`

#### 3.5.6 IsFlexField

**功能**：判断字段是否为弹性域维度字段

**语法**：`bool IsFlexField(string key);`

#### 3.5.7 GetDecimal

**功能**：获取指定数值字段的精度

**语法**：`int GetDecimal(string key);`

## 4. 典型案例分析

### 4.1 案例一：供应链单据列表默认排序

**需求背景**：供应链单据，显示列表时，如果用户未明确指定排序字段，则列表将按照创建日期、单据编号、分录序号排序。

**实现方案**：设计一个公用列表插件，捕获PrepareFilterParameter事件，如判断出用户未设置排序字段，则到单据元数据中，尝试取单据的创建日期、单据编号、分录序号等信息，以这些字段作为排序字段。

**核心代码**：

```csharp
public override void PrepareFilterParameter(FilterArgs e)
{
    base.PrepareFilterParameter(e);
    if (string.IsNullOrWhiteSpace(e.SortString))
    {
        // 创建日期
        Field crDateFld = this.Model.BillBusinessInfo.GetFieldList().FirstOrDefault(
            p => p is CreateDateField);
        
        // 单据编号
        Field numberFld = this.Model.BillBusinessInfo.GetBillNoField();
        
        // 分录序号
        StringBuilder entrySort = new StringBuilder();
        foreach (FilterEntity ety in e.SelectedEntities)
        {
            if (ety.Selected && ety.EntityType == BOSEnums.Enum_EntityType.Entity ||
                ety.Selected && ety.EntityType == BOSEnums.Enum_EntityType.SubEntity)
            {
                EntryEntity entryEntity = this.Model.BillBusinessInfo.GetEntryEntity(ety.Key);
                // 构建排序逻辑...
            }
        }
    }
}
```

### 4.2 案例二：界面关闭前检查改动，提醒保存

**需求背景**：DRP系统参数配置界面，关闭界面前，检查用户是否修改了参数配置，但是未保存；如果有改动，则提醒用户保存。

**实现方案**：捕捉界面的BeforeClosed事件，在界面关闭前，进行修改检查。

**核心代码**：

```csharp
public override void BeforeClosed(BeforeClosedEventArgs e)
{
    if (this.Model.DataChanged && _needNotifyBeforeClose)
    {
        e.Cancel = true;
        string msg = "内容已经修改，是否保存？";
        // 显示提示信息，用户确认后回调BeforeClosedCallBack函数
        this.View.ShowMessage(
            msg,
            MessageBoxOptions.YesNoCancel,
            BeforeClosedCallBack);
    }
}

private void BeforeClosedCallBack(MessageBoxResult result)
{
    if (result == MessageBoxResult.Cancel) return;
    if (result == MessageBoxResult.No)
    {
        _needNotifyBeforeClose = false;
        this.View.Close();
        return;
    }
    if (result == MessageBoxResult.Yes)
    {
        // 用户选择了需要保存
        bool success = SaveParameter();
        if (success)
        {
            _needNotifyBeforeClose = false;
            this.View.Close();
            return;
        }
    }
}
```

### 4.3 案例三：根据供应商取价，填写到单据上

**需求背景**：入库单填写供应商之后，需要取供应商价格填写到单据字段上。

**实现方案**：捕获供应商字段值DataChanged事件，取供应商价格列表，根据规则取价，然后填写到本单字段上；修改字段值的过程，不触发值改变事件，避免重新进入DataChanged事件处理代码。

**核心代码**：

```csharp
public override void DataChanged(DataChangedEventArgs e)
{
    switch (e.Field.Key.ToUpper())
    {
        case "FSUPPLIERID": //供应商
        case "FSUPPLYID": //供货方
            // 根据供应商携带供货方，收款方，结算方等信息
            DoSupplyChange(e);
            SetSupplyAddress(e);
            break;
        // 其他字段处理...
    }
}

private void DoSupplyChange(DataChangedEventArgs e)
{
    // 进入初始化状态，避免触发值改变事件
    this.Model.BeginIniti();
    try
    {
        // 取供应商价格并填写到单据字段
        // ...
    }
    finally
    {
        // 结束初始化状态，恢复值改变事件
        this.Model.EndIniti();
        // 刷新界面
        this.View.UpdateView("FPrice");
    }
}
```

### 4.4 案例四：批量创建信用评估单据体行

**需求背景**：新建供应商信用评估表时，需要加载评估模型的全部行，在单据体中一一创建评估行。

**实现方案**：捕获单据的新单数据包创建完毕事件(AfterCreateNewData)事件，在此事件中，读取评估模型，批量创建相应单据体行数，逐行把评估模型数据填入单据体。

**核心代码**：

```csharp
public override void AfterCreateNewData(EventArgs e)
{
    // 获取供评估模型选择的信用评估指标数据
    DynamicObjectCollection doSelectIndex = SCM.ServiceHelper.CreditServiceHelper.GetCreditIndexListForSelect(this.Context);
    
    // 定义颜色
    List<KeyValuePair<int, string>> colors = new List<KeyValuePair<int, string>>();
    
    // 批量创建数据行
    this.View.Model.BatchCreateNewEntryRow("FTreeEntity", doSelectIndex.Count());
    
    for (int i = 0; i < doSelectIndex.Count(); i++)
    {
        if (Convert.ToChar(doSelectIndex[i]["FLASTLEAF"]) == '1')
        {
            this.View.Model.SetValue("FKey", doSelectIndex[i]["FID"], i);
            this.View.Model.SetValue("FCreditIndex", doSelectIndex[i]["FID"], i);
            this.View.Model.SetValue("FIsSelect", false, i);
            this.View.Model.SetValue("FIndexParentId", -1, i);
            this.View.Model.SetValue("FRowType", 16, i);
            colors.Add(new KeyValuePair<int, string>(i, "#FFE4E1"));
        }
        else
        {
            // 处理非叶子节点...
        }
    }
}
```

### 4.5 案例五：取单据体所选行的内码

**需求背景**：信用管理界面，特别定义了几个操作，针对单据体所选行数据进行处理；支持多选行，批量处理。

**实现方案**：在操作执行前事件，读取单据体所选行的行号，根据行号，到单据体数据集合中取行数据包，然后再取单据体行内码，作为操作附加参数，传入操作服务端组件。

**核心代码**：

```csharp
public override void BeforeDoOperation(BeforeDoOperationEventArgs e)
{
    var info = this.View.Model.BillBusinessInfo;
    var form = info.GetForm();
    if (form.Id.EqualsIgnoreCase(SCMFormIdConst.SAL_ORDER))
    {
        //销售订单 行操作
        switch (e.Operation.FormOperation.Operation.ToUpper())
        {
            case "YLTERMINATE":
            case "YLUNTERMINATE":
            case "YLMRPCLOSE":
            case "YLUNMRPCLOSE":
                // 获取所选行
                List<int> selectedRows = this.View.Model.GetEntryCurrentRowIndex("FEntity").SelectedRows;
                List<long> entryIds = new List<long>();
                
                // 取所选行的内码
                foreach (int row in selectedRows)
                {
                    DynamicObject entryRow = this.View.Model.GetEntityDataObject(
                        info.GetEntryEntity("FEntity"), row);
                    if (entryRow != null && entryRow["Id"] != null)
                    {
                        entryIds.Add(Convert.ToInt64(entryRow["Id"]));
                    }
                }
                
                // 将内码作为参数传入操作
                e.Operation.CustomParameters["EntryIds"] = entryIds;
                break;
        }
    }
}
```

## 5. 最佳实践

### 5.1 性能优化

1. **批量操作优先**：当需要创建或修改多行数据时，使用批量操作方法（如`BatchCreateNewEntryRow`）代替单行操作，减少事件触发和界面刷新次数。

2. **合理使用BeginIniti/EndIniti**：在批量修改字段值时，使用这对方法包裹操作，避免不必要的事件触发和计算，提高性能。

3. **减少直接操作DataObject**：除非必要，否则应使用Model的方法（如`SetValue`）来修改字段值，以确保触发适当的事件和验证。

4. **脏标志管理**：合理使用`GetDirty`和`ClearDirty`方法，避免不必要的数据保存操作。

5. **空行处理**：在保存前调用`ClearNoDataRow`方法清除空行，减少数据传输和存储开销。

### 5.2 代码规范

1. **命名规范**：遵循C#命名规范，使用有意义的变量和方法名。

2. **异常处理**：对可能出现的异常进行适当捕获和处理，确保代码稳定性。

3. **注释完善**：为复杂的业务逻辑和关键代码添加详细注释，提高代码可维护性。

4. **模块化设计**：将复杂的业务逻辑拆分为多个方法，提高代码可读性和可测试性。

5. **参数验证**：对输入参数进行必要的验证，确保代码安全性和稳定性。

### 5.3 开发技巧

1. **元数据利用**：充分利用`BillBusinessInfo`和`BusinessInfo`属性获取元数据信息，实现动态的业务逻辑。

2. **上下文使用**：通过`Context`属性获取当前用户、组织等信息，实现个性化的业务处理。

3. **事件顺序**：了解BOS平台的事件触发顺序，合理安排代码执行时机。

4. **调试技巧**：使用`View.ShowMessage`方法输出调试信息，或使用Visual Studio的调试工具进行断点调试。

5. **平台能力**：充分利用BOS平台提供的服务和工具，避免重复开发。

### 5.4 常见问题与解决方案

| 问题                   | 症状                                 | 解决方案                                           |
| ---------------------- | ------------------------------------ | -------------------------------------------------- |
| 字段值改变事件循环触发 | 价格与含税单价相互影响，导致循环计算 | 使用BeginIniti/EndIniti方法包裹计算逻辑            |
| 批量操作性能慢         | 创建多行数据时界面卡顿               | 使用BatchCreateNewEntryRow方法批量创建             |
| 数据保存失败           | 保存时提示字段验证错误               | 检查字段值是否符合验证规则，确保必填字段有值       |
| 子单据体数据获取错误   | 无法正确获取子单据体数据             | 注意子单据体仅返回归属于父单据体当前焦点行的子集合 |
| 界面刷新问题           | 修改数据后界面未及时更新             | 调用View.UpdateView方法强制刷新界面                |

## 6. 高级应用

### 6.1 跨表单数据传递

**实现方式**：

1. 通过`OpenParameter`传递参数
2. 使用`DataObject`直接操作数据包
3. 利用上下文对象传递信息

**示例**：

```csharp
// 父表单打开子表单时传递参数
BillShowParameter showParameter = new BillShowParameter();
showParameter.FormId = "SAL_Order";
showParameter.ParentPageId = this.View.PageId;
showParameter.Status = OperationStatus.ADDNEW;
// 添加自定义参数
showParameter.CustomParameters.Add("CustomerId", customerId);
this.View.ShowForm(showParameter);

// 子表单获取参数
object customerIdObj = this.View.Model.OpenParameter.GetCustomParameter("CustomerId");
if (customerIdObj != null)
{
    long customerId = Convert.ToInt64(customerIdObj);
    // 使用参数...
}
```

### 6.2 复杂业务逻辑实现

**实现方式**：

1. 利用Model的各种方法组合实现复杂逻辑
2. 结合服务端组件处理复杂计算
3. 使用事务确保数据一致性

**示例**：实现一个复杂的价格计算逻辑

### 6.3 与其他接口协同使用

**与IDynamicFormView接口的配合**：

- IDynamicFormModel负责数据模型
- IDynamicFormView负责UI视图
- 两者结合实现完整的表单功能

**与服务组件的配合**：

- 通过Model获取数据
- 调用服务组件处理业务逻辑
- 将处理结果写回Model

## 7. 附录

### 7.1 常用API速查

| API                                                      | 功能描述         | 使用场景         |
| -------------------------------------------------------- | ---------------- | ---------------- |
| `Model.SetValue(string fieldKey, object value, int row)` | 设置字段值       | 单个字段赋值     |
| `Model.GetValue(string fieldKey, int row)`               | 获取字段值       | 单个字段取值     |
| `Model.GetEntityDataObject(Entity entity)`               | 获取实体数据     | 批量数据处理     |
| `Model.BatchCreateNewEntryRow(string key, int rowCount)` | 批量创建行       | 快速创建多行数据 |
| `Model.BeginIniti() / Model.EndIniti()`                  | 控制事件触发     | 避免循环计算     |
| `Model.GetDirty()`                                       | 检查数据是否变更 | 优化保存操作     |
| `Model.ClearNoDataRow()`                                 | 清除空行         | 数据清理         |
| `Model.GetEntryCurrentRowIndex(string key)`              | 获取当前行号     | 单据体操作       |

### 7.2 开发工具配置

1. **Visual Studio配置**：
   - 安装金蝶BOS开发插件
   - 配置项目引用，添加必要的K3 assemblies
   - 设置调试环境，指向K3客户端

2. **调试技巧**：
   - 使用Visual Studio的附加进程功能调试插件
   - 设置断点，观察变量值变化
   - 使用日志记录关键操作和错误信息，方便排查问题