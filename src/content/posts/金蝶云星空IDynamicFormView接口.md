---
title: 金蝶云星空IDynamicFormView接口
published: 2026-02-06
description: '金蝶云星空IDynamicFormView接口学习'
image: ''
tags: ['金蝶云星空']
category: '金蝶云星空'
draft: false 
lang: ''
---

# IDynamicFormView接口复习文档

## 1. 接口概述

### 1.1 基本概念

IDynamicFormView接口是金蝶云星空BOS二次开发中MVC架构的视图层实现接口，负责界面展示等相关操作，对动态表单的视图进行管理，广泛应用于表单插件和列表插件。

表单插件和列表插件通过访问`View`属性取得IDynamicFormView的接口实例。

### 1.2 应用场景

- 表单插件中控制界面元素的显示和行为
- 列表插件中管理列表视图和数据展示
- 自定义界面交互逻辑
- 控制菜单、按钮的可用性和可见性
- 处理界面事件和用户操作
- 与父页面或其他页面进行数据交互

### 1.3 核心价值

- 提供统一的界面操作接口，简化界面开发
- 支持丰富的界面元素控制功能
- 实现页面间的数据交互和通信
- 与数据模型层(IDynamicFormModel)配合，实现完整的MVC架构
- 提供灵活的界面定制能力

## 2. 公共属性详解

### 2.1 BillBusinessInfo

**功能**：当前页面管理的来源单据逻辑元数据

**语法**：`BusinessInfo BillBusinessInfo { get; }`

**备注**：在列表（或在简单报表和移动单据）中，BillBusinessInfo表示来源单据的逻辑元数据，而BusinessInfo表示当前界面的元数据。

**常用属性**：

- `Elements`：返回单据上的全部元素，包括全部字段、实体
- `Entrys`：返回单据上的全部实体
- `MainOrgField`：返回单据的主业务组织字段

**常用方法**：

- `GetBillNoField()`：获取单据编号字段，如果是基础资料，则返回基础资料编码
- `GetEntity(string key)`：获取单据的实体元数据
- `GetField(string key)`：获取单据字段元数据
- `GetFieldList()`：获取单据全部字段元数据列表

**典型应用**：在列表插件中获取来源单据的字段信息，用于构建排序、过滤等逻辑。

### 2.2 BusinessInfo

**功能**：当前页面业务对象的逻辑元数据

**语法**：`BusinessInfo BusinessInfo { get; }`

**备注**：BusinessInfo属性必定为当前界面的元数据；而BillBusinessInfo，在列表或系统报表的简单报表和移动单据视图上，表示来源单据的业务逻辑元数据。

**应用场景**：获取当前界面的元数据信息，用于插件开发中的各种逻辑判断和操作。

### 2.3 ClientType

**功能**：访问服务器的客户端类型

**语法**：`ClientType ClientType { get; }`

**备注**：如Silverlight、WPF、HTML5、移动等客户端类型。

**应用场景**：根据不同的客户端类型，执行不同的界面逻辑。

### 2.4 Context

**功能**：登录系统的上下文信息

**语法**：`Context Context { get; }`

**备注**：包括当前登录的用户、客户端类型、连接的数据中心，当前组织等相关信息。在插件中使用比较多，也很重要。调用服务接口的时候，此属性通常必不可少。

**常用属性**：

- `ClientInfo`：客户端信息
- `CurrentOrganizationInfo`：当前组织信息
- `DatabaseType`：数据库类型
- `IsMultiOrg`：是否是多组织数据中心
- `UserId`：当前用户Id
- `UserName`：当前用户名称

**应用场景**：获取当前用户信息、组织信息，用于权限验证、数据过滤等。

### 2.5 LayoutInfo

**功能**：当前页面布局元数据

**语法**：`LayoutInfo LayoutInfo { get; }`

**备注**：包括各个控件的大小、位置、标题等外观信息。

**应用场景**：获取和修改界面布局信息。

### 2.6 Model

**功能**：动态表单数据模型编程接口

**语法**：`IDynamicFormModel Model { get; }`

**备注**：用于视图操作数据的模型，界面数据的增删改查都需要用到。

**应用场景**：通过Model属性操作表单数据，实现数据的读取、修改、验证等。

### 2.7 OpenParameter

**功能**：界面被加载时传入的参数

**语法**：`DynamicFormOpenParameter OpenParameter { get; }`

**备注**：打开当前模型的相关参数，与请求加载模型时要求的相关模型参数类似；对于不同的界面类型，如动态表单界面、单据维护界面、列表界面，本属性的类型不同。

**常用方法**：

- `GetCustomParameter(string key)`：获取定制参数
- `GetCustomParameters()`：获得所有自定义参数
- `SetCustomParameter(String key, object value)`：添加定制参数

**应用场景**：获取打开界面时传递的参数，用于初始化界面状态、控制界面行为等。

### 2.8 PageId

**功能**：页面唯一标识

**语法**：`string PageId { get; }`

**备注**：用来区分同时打开的不同页面。浏览器中打开的每个页面，在K/3 Cloud应用服务器，都有以PageId标识与隔离的Session片段，缓存页面的数据。

**应用场景**：通过PageId获取其他页面的视图实例，实现页面间的通信和控制。

### 2.9 ParentFormView

**功能**：调用本视图的父窗体视图模型

**语法**：`IDynamicFormView ParentFormView { get; set; }`

**备注**：当前被打开页面的父页面。如A页面上点击按钮弹出B页面，A页面是B页面的ParentFormView；特别关注：ParentFormView可能为null，使用前要增加null值判断。

**应用场景**：与父页面进行数据交互、控制父页面的控件状态等。

### 2.10 RuleContainer

**功能**：当前视图的实体服务规则容器

**语法**：`BOSRuleContainer RuleContainer { get; }`

**备注**：本属性为内部管理类，插件请勿调用。

### 2.11 Session

**功能**：页面数据交换区

**语法**：`Dictionary<string, object> Session { get; set; }`

**备注**：跨页面传输复杂对象，或用于与其它视图用于数据交换的数据缓存区。

**应用场景**：在父子页面之间传递复杂数据对象，实现页面间的数据共享。

### 2.12 StyleManager

**功能**：当前视图的控件样式管理器

**语法**：`IStyleManager StyleManager { get; }`

**备注**：当前视图关联的控件样式管理器，主要管理控件的可用性（Enable）、可见性（Visible）、数量字段精度设置。插件获取界面控件后，设置的控件状态，均存储与此属性对象；本属性为内部管理类，插件请勿调用。

### 2.13 UserParameterKey

**功能**：用户参数的唯一标识

**语法**：`string UserParameterKey { get; }`

**备注**：如加载的是单据，返回单据的模型ID，如加载的是列表，返回列表对应模型的ID+特殊字符串（"_list"）。

**应用场景**：获取用户参数标识，用于参数管理和传递。

## 3. 公共方法详解

### 3.1 AddAction

**功能**：添加自定义客户端指令，可带回掉函数

**语法**：

- `void AddAction(string actionName, object param);`
- `void AddAction(string actionName, object param, Action<object> callback);`

**参数说明**：

- `actionName`：客户端方法名
- `param`：参数对象，必须可序列化为Json字符串
- `callback`：回调函数

**应用场景**：向客户端发送自定义指令，实现客户端与服务端的交互。

### 3.2 BroadcastToOnlineUser

**功能**：发送广播给用户

**语法**：`void BroadcastToOnlineUser(JObject data, List<long> users);`

**参数说明**：

- `data`：广播消息
- `users`：广播用户，如果为空，表示所有在线用户

**应用场景**：向指定用户或所有在线用户发送广播消息。

### 3.3 Close

**功能**：请求关闭页面

**语法**：`void Close();`

**应用场景**：在用户执行某些操作后，关闭当前页面。

### 3.4 FlexClose

**功能**：请求关闭弹性域维护页面

**语法**：`void FlexClose();`

**备注**：本方法专用于关闭弹性域维护页面，其他页面插件请使用Close()方法关闭页面。

### 3.5 GetBarItem

**功能**：获取工具栏、按钮、分录表格菜单项控件编程对象

**语法**：

- `BarItemControl GetBarItem(string parentKey, string barItemName);`
- `T GetBarItem<T>(string parentKey, string barItemName) where T : BarItemControl;`

**参数说明**：

- `parentKey`：工具栏、按钮、分录表格控件标识
- `barItemName`：菜单项标识

**返回类型**：`Kingdee.BOS.Core.DynamicForm.PlugIn.ControlModel.BarItemControl`

**应用场景**：获取工具栏按钮控件，设置其可用性、可见性、标题等。

### 3.6 GetControl

**功能**：获取控件的编程对象

**语法**：

- `Control GetControl(string key);`
- `T GetControl<T>(string key) where T:Control;`

**参数说明**：`Key`为控件标识

**返回类型**：`Kingdee.BOS.Core.DynamicForm.PlugIn.ControlModel.Control`

**应用场景**：获取界面控件，设置其属性、状态和值等。

### 3.7 GetEntryState

**功能**：获取分录的数据显示情况

**语法**：`IEntryState GetEntryState(string entryKey);`

**参数说明**：`entryKey`为分录唯一标识

**返回类型**：分录显示的数据情况，包括总页数和当前页数

**应用场景**：获取单据体的分页信息，用于分页相关的逻辑处理。

### 3.8 GetFieldEditor

**功能**：获取字段控件编程对象

**语法**：

- `FieldEditor GetFieldEditor(FieldAppearance fieldAppearance, int row);`
- `T GetFieldEditor<T>(string key, int row) where T : FieldEditor;`

**参数说明**：

- `key`：字段标识
- `row`：如果字段是分录中，对应分录行号

**返回类型**：`Kingdee.BOS.Core.DynamicForm.PlugIn.ControlModel.FieldEditor`

**备注**：对于单据头上的字段，GetControl和GetFielEditor都可以拿到控件对象，但是如果字段在单据体，则只能通过GetFieldEditor获取。

**应用场景**：获取字段控件，设置其可见性、可用性、值等，特别是单据体中的字段。

### 3.9 GetFormOperation

**功能**：获取指定的表单操作

**语法**：

- `IFormOperation GetFormOperation(string operationNumber);`
- `IFormOperation GetFormOperation(FormOperationEnum operationType);`

**参数说明**：`operationNumber`为操作编码，在设计器中新增表单操作时定义

**返回类型**：`Kingdee.BOS.Core.DynamicForm.IFormOperation`

**应用场景**：获取操作实例对象，执行操作，验证操作权限等。

### 3.10 GetFormTitle

**功能**：获取当前界面标题

**语法**：`LocaleValue GetFormTitle();`

**返回类型**：界面标题，多语言对象，可以通过ToSting()方法，取得当前语言下的内容

**应用场景**：获取界面标题，用于显示、日志记录等。

### 3.11 GetLookupConfig

**功能**：获取基础资料的模糊查找配置

**语法**：`JSONObject GetLookupConfig(FieldAppearance fieldAppearance);`

**参数说明**：`fieldAppearance`为字段外观元数据

**返回类型**：配置情况

**备注**：BOS平台内部专用方法，插件请勿调用。

### 3.12 GetMainBarItem

**功能**：获取主菜单项操作对象

**语法**：`BarItemControl GetMainBarItem(string barItemName);`

**参数说明**：`barItemName`为菜单项标识

**返回类型**：`Kingdee.BOS.Core.DynamicForm.PlugIn.ControlModel.BarItemControl`

**应用场景**：获取主菜单项操作对象，设置是否可用，可见，标题等。

### 3.13 GetMainMenu

**功能**：获取表单的主菜单信息

**语法**：`MenuControl GetMainMenu();`

**返回类型**：主菜单信息

**应用场景**：获取主菜单信息，用于菜单管理和定制。

### 3.14 GetMenu

**功能**：获取指定标识的菜单

**语法**：`MenuControl GetMenu(string key);`

**参数说明**：`key`为菜单唯一标识

**返回类型**：菜单控件编程对象，可以通过此对象添加子菜单项

**应用场景**：获取菜单控件，添加子菜单项，定制菜单结构。

### 3.15 GetService

**功能**：获取指定类型动态表单服务

**语法**：`T GetService<T>();`

**参数说明**：`T`为要获取的服务类型

**返回类型**：获取的服务

**应用场景**：获取动态表单服务，用于执行各种业务逻辑。

### 3.16 GetTmpfilePath

**功能**：获取文件在服务器上的物理路径

**语法**：`string GetTmpfilePath(string path);`

**参数说明**：`path`为文件的相对路径

**返回类型**：文件的物理路径

**应用场景**：获取文件的物理路径，用于文件操作。

### 3.17 GetView

**功能**：获取指定界面的视图实例

**语法**：`IDynamicFormView GetView(string pageId);`

**参数说明**：`pageId`为页面唯一标识

**返回类型**：`Kingdee.BOS.Core.DynamicForm.IDynamicFormView`

**应用场景**：根据页面pageId获取视图实例，调用视图的方法获取视图的数据、状态等。

## 4. 典型案例分析

### 4.1 案例一：供应链单据列表默认排序

**需求背景**：供应链所有列表在展示时，希望按编码与创建日期降序排列。

**实现方案**：供应链通用插件中，在列表准备过滤条件阶段（PrepareFilterParameter事件），通过BillBusinessInfo获取编号与创建日期的字段元数据信息，通过字段元数据信息可以得到这两个字段对应的数据库字段名称。使用这些名称，修改事件的排序子句，后面加载列表数据的时候BOS平台会根据这个排序子句对列表进行排序。

**核心代码**：

```csharp
public override void PrepareFilterParameter(FilterArgs e)
{
    if (string.IsNullOrWhiteSpace(e.SortString))
    {
        Field crDateFld = this.View.BillBusinessInfo.GetFieldList().FirstOrDefault(
            p => p is CreateDateField);
        Field numberFld = this.View.BillBusinessInfo.GetFieldList().FirstOrDefault(
            p => p is BillNoField);
        
        //也要按分录顺序排序
        StringBuilder entrySort = new StringBuilder();
        foreach (FilterEntity ety in e.SelectedEntities)
        {
            if (ety.Selected && ety.EntityType == BOS.Core.Enums.BOSEnums.Enum_EntityType.Entity ||
                ety.Selected && ety.EntityType == BOS.Core.Enums.BOSEnums.Enum_EntityType.SubEntity)
            {
                EntryEntity entryEntity = this.View.BillBusinessInfo.GetEntryEntity(ety.Key);
                if (string.IsNullOrWhiteSpace(entryEntity.SeqFieldKey))
                {
                    entrySort.AppendFormat(", {0}.{1} ASC ", entryEntity.TableAlias, entryEntity.EntryPkFieldName);
                }
                else
                {
                    entrySort.AppendFormat(", {0}.{1} ASC ", entryEntity.TableAlias, entryEntity.SeqFieldKey);
                }
            }
        }
        
        //构建排序字符串
        StringBuilder sortBuilder = new StringBuilder();
        if (numberFld != null)
        {
            sortBuilder.AppendFormat("{0}.{1} DESC ", numberFld.Entity.TableAlias, numberFld.ColumnName);
        }
        if (crDateFld != null)
        {
            sortBuilder.AppendFormat(", {0}.{1} DESC ", crDateFld.Entity.TableAlias, crDateFld.ColumnName);
        }
        sortBuilder.Append(entrySort.ToString());
        
        e.SortString = sortBuilder.ToString().TrimStart(new char[] { ',', ' ' });
    }
}
```

### 4.2 案例二：已经下推的数据行不允许删除

**需求背景**：销售订单界面，删除行数据之前要获取单据体行信息，判断行数据是否可以删除。

**实现方案**：插件重写BeforeDeleteRow事件，从View中拿BusinessInfo对象，从中获取需要的单据体元数据信息,以此为参数，从模型中获取到当前行数据包，然后判断当前行数据是否能删除。

**核心代码**：

```csharp
public override void BeforeDeleteRow(BeforeDeleteRowEventArgs e)
{
    if (e.EntityKey.EqualsIgnoreCase("FSaleOrderEntry"))
    {
        #region 直接订单变更时，删除明细行，只允许删除行状态为非关闭、非冻结、非终止、未关联下游数据的分录！
        // 获取单据状态
        string sDocumentStatus = Convert.ToString(this.View.Model.GetValue("FDocumentStatus"));
        
        //para_SOChangeType，变更类型 A:启用订单变更单 B：订单直接变更
        // 变更类型=订单直接变更，单据状态=已审核时
        if (para_SOChangeType == "B" && sDocumentStatus == "C")
        {
            int currentRowIndex = e.Row;
            bool bIsFreeze = Convert.ToString(this.View.Model.GetValue("FMrpFreezeStatus", currentRowIndex)).Equals("B");
            bool bIsTerminate = Convert.ToString(this.View.Model.GetValue("FMrpTerminateStatus", currentRowIndex)).Equals("B");
            bool bIsClose = Convert.ToString(this.View.Model.GetValue("FMrpCloseStatus", currentRowIndex)).Equals("B");
            
            Entity entity = this.View.BusinessInfo.GetEntity("FSaleOrderEntry");
            DynamicObjectCollection entityData = this.View.Model.GetEntityDataObject(entity);
            DynamicObject dynamicObjectRow = entityData[currentRowIndex];
            
            // 判断当前行是否已经下推其他单据
            IsPushArgs isPushArgs = new IsPushArgs(this.View.BusinessInfo, "FSaleOrderEntry", dynamicObjectRow);
            bool bRowIsPush = Kingdee.BOS.ServiceHelper.BusinessFlowDataServiceHelper.IsPush(this.Context, isPushArgs);
            
            if (bIsClose || bIsFreeze || bIsTerminate || bRowIsPush)
            {
                e.Cancel = true;
                this.View.ShowMessage("只允许删除行状态为非关闭、非冻结、非终止、未关联下游数据的分录！");
            }
        }
        #endregion
    }
}
```

### 4.3 案例三：根据数据中心的多组织属性，隐藏/显示菜单

**需求背景**：加载单据数据之后，如果是单组织数据中心，则需要隐藏分发下拉菜单；如果是多组织，则需要显示该菜单。

**实现方案**：重写AfterBindData事件，判断数据中心的多组织类型，隐藏或显示菜单。

**核心代码**：

```csharp
public override void AfterBindData(EventArgs e)
{
    base.AfterBindData(e);
    bool bIsMultiOrg = this.View.Context.IsMultiOrg;
    if (bIsMultiOrg == true)
    {
        this.View.GetMainBarItem("tbSplitIssue").Visible = true;
    }
    else
    {
        this.View.GetMainBarItem("tbSplitIssue").Visible = false;
    }
}
```

### 4.4 案例四：锁定父页面字段

**需求背景**：加载当前页面时，根据父页面上下文信息，初始化本单据全局变量；同时锁定父页面某字段。

**实现方案**：插件重写OnInitialize方法，通过当前页面View的ParentFormView属性，获取到父页面View对象，访问父页面View对象的Context属性中IsMultiOrg属性，初始化本单据bIsMultiOrg全局对象；通过父页面View提供的GetControl方法，得到父页面的控件，对控件属性赋值，最后通过调用SendDynamicFormAction方法，把父页面作为参数传进去，将父页面的控件控制指令发送到前端。

**核心代码**：

```csharp
public override void OnInitialize(InitializeEventArgs e)
{
    if (this.View.ParentFormView == null)
    {
        return;
    }
    object oOrgId = e.Paramter.GetCustomParameter("OrgId");
    bIsMultiOrg = this.View.ParentFormView.Context.IsMultiOrg;
    if (oOrgId != null)
    {
        this._lOrgId = Convert.ToInt64(oOrgId);
    }
    else
    {
        this._lOrgId = Convert.ToInt64(this.Context.CurrentOrganizationInfo.ID);
    }
    
    // 锁定父窗体的组织名称字段
    this.View.ParentFormView.GetControl("FOrgId").Enabled = false;
    this.View.SendDynamicFormAction(this.View.ParentFormView);
}
```

### 4.5 案例五：与父页面进行数据交换

**需求背景**：供应链的信用重算结果页面，需要获取父页面的数据，以便初始化本页面全局变量。

**实现方案**：重写OnInitialize事件，通过访问ParentFormView的Session对象，获取父页面保存在缓存区的数据，当前页面使用完后，清除父页面的这个缓存对象数据。

**核心代码**：

```csharp
public override void OnInitialize(InitializeEventArgs e)
{
    if (this.View.ParentFormView == null)
    {
        return;
    }
    if (e.Paramter.GetCustomParameter("SessionKey").IsNullOrEmpty())
    {
        return;
    }
    string sessionKey = e.Paramter.GetCustomParameter("SessionKey").ToString();
    _recalType = e.Paramter.GetCustomParameter("RecalType").ToString();
    
    if (this.View.ParentFormView.Session.ContainsKey(sessionKey))
    {
        _result = this.View.ParentFormView.Session[sessionKey] as ReCalResult;
        this.View.ParentFormView.Session.Remove(sessionKey);
    }
    
    string resultTitle = _recalType == "1" ? "信用初始化成功！" : "信用重算成功！";
    this.View.SetFormTitle(resultTitle);
}
```

### 4.6 案例六：点击按钮，关闭页面

**需求背景**：点击界面的确定按钮，将数据返回给父页面，然后关闭页面。

**实现方案**：重写按钮点击事件ButtonClick，打包好要返回给父页面的数据，然后使用ReturnToParentWindow方法返回数据给父页面，并关闭窗体。

**核心代码**：

```csharp
public override void ButtonClick(ButtonClickEventArgs e)
{
    switch (e.Key.ToUpperInvariant())
    {
        case "FBTNOK":
            ReturnData();
            break;
    }
    base.ButtonClick(e);
}

private void ReturnData()
{
    DynamicObject currency = this.View.Model.GetValue("FCurrencyID") as DynamicObject;
    DynamicObject currencyUnit = this.View.Model.GetValue("FCurrencyUnitID") as DynamicObject;
    List<int> selectedElimTypeIds = new List<int>();
    
    DynamicObjectCollection objs = this.View.Model.GetEntityDataObject(this.View.BusinessInfo.GetEntryEntity("FEntity"));
    foreach (DynamicObject obj in objs)
    {
        bool selected = Convert.ToBoolean(obj["Selected"]);
        if (selected == true)
        {
            DynamicObject elimType = obj["ElimTypeID"] as DynamicObject;
            selectedElimTypeIds.Add(Convert.ToInt32(elimType["ID"]));
        }
    }
    
    if (selectedElimTypeIds.Count <= 0)
    {
        this.View.ShowErrMessage(Kingdee.BOS.Resource.ResManager.LoadKDString("未选择抵消类型", "003287000010479", Kingdee.BOS.Resource.SubSystemType.FIN));
        return;
    }
    
    JSONObject ret = new JSONObject();
    ret.Add("CurrencyID", currency["ID"]);
    ret.Add("CurrencyUnitID", currencyUnit["ID"]);
    ret.Add("CreateMode", this.Model.DataObject["CreateMode"]);
    ret.Add("ElimTypeIds", selectedElimTypeIds);
    
    this.View.ReturnToParentWindow(new FormResult(ret));
    this.View.Close();
}
```

### 4.7 案例七：设置菜单按钮不可用

**需求背景**：检查基础资料是否符合受控基础资料的配置要求，以此设置菜单的可用性。

**实现方案**：对当前基础资料进行检查，是否受组织控制策略，并且检查是否有指定创建组织和使用组织，并且设置菜单按钮不可用。

**核心代码**：

```csharp
public override void AfterLoadData(EventArgs e)
{
    base.AfterLoadData(e);
    
    //获取当前的控制策略类型
    oldStrategyType = this.View.Model.GetValue("FStrategyType").ToString();
    
    //单据锁定界面的通用控制还没做好，暂时先在这里处理一下了，
    if (Convert.ToBoolean(this.View.Model.GetValue("FLocked")))
    {
        this.View.OpenParameter.Status = Core.Metadata.OperationStatus.VIEW;
    }
    else // add Leo 2013-06-09 20:44，恢复页面编辑状态
    {
        this.View.OpenParameter.Status = OperationStatus.EDIT;
    }
    
    //获取当前记录对应的Number和表单信息
    curNumber = this.Model.GetValue(this.Model.BusinessInfo.GetForm().NumberFieldKey).ToString();
    curFormMetadata = FormMetaDataCache.GetCachedFormMetaData(this.Context, curNumber);
    Form curForm = curFormMetadata.BusinessInfo.GetForm();
    
    //对当前基础资料进行检查，是否符合受控基础资料配置要求，如果不符合则不能进行操作。
    if (!curForm.IsBaseDataTypeControl)
    {
        this.View.ShowWarnningMessage("该基础资料不受组织控制策略控制，不能对其进行操作，请确认。", action:
            (imbr) =>
            {
                this.View.Close();
            }
        );
        return;
    }
    
    if (curForm.CreateOrgFieldKey.IsNullOrEmptyOrWhiteSpace() || curForm.UseOrgFieldKey.IsNullOrEmptyOrWhiteSpace())
    {
        this.View.ShowWarnningMessage("该基础资料没有指定创建组织和使用组织，不能对其进行操作，请确认。" , action:
            (imbr) =>
            {
                this.View.Close();
            }
        );
    }
    
    this.View.GetBarItem("ToolBar", "tbSplitPrevious").Enabled = false;
}
```

### 4.8 案例八：获取树形控件，构造树形控件节点数据

**需求背景**：辅助资料明细列表界面，需要给左边的树绑定数据，显示辅助资料类别信息。

**实现方案**：重写TreeLoadData事件，获取树形控件，构造树形控件节点数据，给树形控件绑定数据。

**核心代码**：

```csharp
TreeNode rootNode;

public override void TreeLoadData(TreeLoadDataArgs e)
{
    TreeView tv = this.View.GetControl<TreeView>("FGroupTreeView");
    rootNode = new TreeNode()
    {
        id = "0",
        text = "全部",
        cls = "parentnode"
    };
    rootNode.children.AddRange(BuildTree());
    tv.SetRootNode(rootNode);
    tv.SetExpanded(true);
    e.Cancel = true;
}

/// <summary>
/// 构造组织树
/// </summary>
private List<TreeNode> BuildTree()
{
    DataTable dtTypeInfo = GetAssistantDataType();
    var query = from q in dtTypeInfo.AsEnumerable()
                where q["FParentId"] == null || q["FParentId"].ToString().IsEmpty() == true
                group q by new
                {
                    id = q.Field<string>("ftopclassid"),
                    name = q.Field<string>("ftopclassid") == "fd1e82470267457fa433d2bf0f6ad028" ? "人力资源" : q.Field<string>("ftopclassname"),
                } into grp
                select new TreeNode
                {
                    //业务领域
                    id = "TOP" + grp.Key.id,
                    text = grp.Key.name,
                    children = (from item in grp
                               select new TreeNode
                               {
                                   //子节点
                                   id = item.Field<string>("fid"),
                                   text = item.Field<string>("fname"),
                                   parentid = "TOP" + grp.Key.id,
                                   children = CreateChildNode(dtTypeInfo, item)
                               }
                               ).OrderBy(p => p.text).ToList<TreeNode>()
                };
    
    List<TreeNode> nodes = query.ToList<TreeNode>();
    this.View.OpenParameter.SetCustomParameter("nodes", nodes);
    return nodes;
}
```

## 5. 最佳实践

### 5.1 性能优化

1. **减少界面刷新**：在批量操作时，尽量减少界面刷新次数，可以通过BeginIniti/EndIniti方法包裹操作，或使用批量操作方法。

2. **合理使用缓存**：对于频繁访问的数据，可以使用Session属性进行缓存，减少重复计算和数据库查询。

3. **控件操作优化**：在设置多个控件属性时，尽量一次性设置完成，然后调用SendDynamicFormAction方法，减少网络传输次数。

4. **延迟加载**：对于复杂的界面元素，如树形结构、大量数据的列表等，采用延迟加载策略，提高界面响应速度。

5. **事件处理优化**：在处理界面事件时，避免在事件处理程序中执行耗时操作，可考虑使用异步处理或后台任务。

### 5.2 代码规范

1. **命名规范**：遵循C#命名规范，使用有意义的变量和方法名。

2. **异常处理**：对可能出现的异常进行适当捕获和处理，确保代码稳定性。

3. **注释完善**：为复杂的业务逻辑和关键代码添加详细注释，提高代码可维护性。

4. **模块化设计**：将复杂的业务逻辑拆分为多个方法，提高代码可读性和可测试性。

5. **参数验证**：对输入参数进行必要的验证，确保代码安全性和稳定性。

6. **空值检查**：特别是在访问ParentFormView等可能为null的属性时，一定要进行空值检查。

### 5.3 开发技巧

1. **视图与模型分离**：遵循MVC设计模式，视图层(IDynamicFormView)负责界面展示和用户交互，模型层(IDynamicFormModel)负责数据管理，业务逻辑层负责处理业务规则。

2. **利用元数据**：充分利用BillBusinessInfo和BusinessInfo属性获取元数据信息，实现动态的业务逻辑，避免硬编码。

3. **页面间通信**：对于父子页面间的通信，优先使用Session属性进行数据传递，避免使用全局变量。

4. **控件操作**：对于单据体中的字段，使用GetFieldEditor方法获取控件；对于单据头中的字段，GetControl和GetFieldEditor都可以使用。

5. **菜单管理**：根据业务逻辑和用户权限，动态控制菜单的可见性和可用性，提供友好的用户界面。

6. **调试技巧**：使用View.ShowMessage方法输出调试信息，或使用Visual Studio的调试工具进行断点调试。

7. **平台能力**：充分利用BOS平台提供的服务和工具，避免重复开发。

### 5.4 常见问题与解决方案

| 问题               | 症状                         | 解决方案                                              |
| ------------------ | ---------------------------- | ----------------------------------------------------- |
| 控件获取失败       | 调用GetControl返回null       | 检查控件Key是否正确，对于单据体字段使用GetFieldEditor |
| 父页面操作无效     | 对ParentFormView的操作不生效 | 操作后调用SendDynamicFormAction方法                   |
| 页面间数据传递失败 | 子页面无法获取父页面数据     | 使用Session属性或OpenParameter传递数据                |
| 界面刷新问题       | 修改数据后界面未及时更新     | 调用View.UpdateView方法强制刷新界面                   |
| 性能问题           | 界面操作卡顿                 | 减少界面刷新次数，使用批量操作，优化数据处理逻辑      |
| 权限验证失败       | 操作执行时提示权限不足       | 使用GetFormOperation获取操作对象，验证权限后再执行    |
| 多语言问题         | 界面文本显示不正确           | 使用LocaleValue类型和ResManager加载多语言资源         |
| 客户端兼容性问题   | 在不同客户端表现不一致       | 使用ClientType属性判断客户端类型，执行不同逻辑        |

## 6. 高级应用

### 6.1 自定义界面控件

**实现方式**：

1. 创建自定义控件类，继承自Control或其派生类
2. 在插件中通过AddAction方法向客户端发送指令，注册自定义控件
3. 实现控件的客户端和服务端逻辑

**应用场景**：实现复杂的自定义界面控件，如特殊的图表、编辑器等。

### 6.2 界面布局动态调整

**实现方式**：

1. 通过LayoutInfo属性获取界面布局信息
2. 根据业务需求动态修改布局信息
3. 调用SendDynamicFormAction方法更新界面

**应用场景**：根据用户角色、业务场景等动态调整界面布局，提供个性化的用户体验。

### 6.3 多页面协同工作

**实现方式**：

1. 使用PageId和GetView方法获取其他页面的视图实例
2. 通过Session属性在页面间传递数据
3. 调用其他页面的方法，实现页面间的协同操作

**应用场景**：实现复杂的业务流程，需要多个页面协同完成的场景，如向导式操作、多步骤审批等。

### 6.4 界面状态管理

**实现方式**：

1. 使用Session属性存储界面状态信息
2. 在页面初始化时恢复状态
3. 在页面关闭前保存状态

**应用场景**：实现界面状态的持久化，如用户的筛选条件、排序方式、布局偏好等。

### 6.5 与外部系统集成

**实现方式**：

1. 通过Context属性获取系统上下文信息
2. 调用外部系统的API，获取或提交数据
3. 将外部系统的数据集成到界面中

**应用场景**：与ERP、CRM、OA等外部系统集成，实现数据的共享和同步。

## 7. 附录

### 7.1 常用API速查

| API                                                     | 功能描述         | 使用场景           |
| ------------------------------------------------------- | ---------------- | ------------------ |
| `View.GetControl(string key)`                           | 获取控件对象     | 单据头控件操作     |
| `View.GetFieldEditor(string key, int row)`              | 获取字段编辑器   | 单据体字段操作     |
| `View.GetMainBarItem(string barItemName)`               | 获取主菜单项     | 菜单控制           |
| `View.GetBarItem(string parentKey, string barItemName)` | 获取工具栏项     | 工具栏控制         |
| `View.GetFormOperation(string operationNumber)`         | 获取表单操作     | 执行操作、权限验证 |
| `View.GetView(string pageId)`                           | 获取其他页面视图 | 页面间通信         |
| `View.Close()`                                          | 关闭页面         | 操作完成后关闭页面 |
| `View.ShowMessage(string message)`                      | 显示消息         | 提示用户           |
| `View.ShowErrMessage(string message)`                   | 显示错误消息     | 错误提示           |
| `View.ReturnToParentWindow(FormResult result)`          | 返回数据给父页面 | 父子页面数据传递   |
| `View.SendDynamicFormAction(IDynamicFormView view)`     | 发送界面操作指令 | 控件状态更新       |
| `View.UpdateView()`                                     | 刷新界面         | 数据更新后刷新界面 |
| `View.GetFormOperation(string operationNumber)`         | 获取表单操作     | 执行操作、权限验证 |