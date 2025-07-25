use blog;

ALTER TABLE Users
ADD CONSTRAINT PK1_UserId PRIMARY KEY(UserId);

-- IssueTypes
CREATE TABLE IssueTypes(
	IssueTypeId INT NOT NULL IDENTITY(1,1),
	IssueCategoryId INT NOT NULL,
	IssueType VARCHAR(100) NOT NULL ,
	CreatedBy INT NOT NULL,
	CreatedOn DATETIME NOT NULL,	
	UpdatedBy INT NULL,
	UpdatedOn DATETIME NULL,
	CONSTRAINT UK1_IssueType_IssueCat UNIQUE(IssueType,IssueCategoryId),
	CONSTRAINT FK1_CreatedBy FOREIGN KEY(CreatedBy) REFERENCES Users(UserId)
);

CREATE INDEX IDX1_IssueType_IssueCategory ON IssueTypes(IssueCategoryId,IssueType);

-- IssueCategories
CREATE TABLE IssueCategories(
	IssueCategoryId INT NOT NULL IDENTITY(1,1),
	IssueCategory VARCHAR(100) NOT NULL ,
	CreatedBy INT NOT NULL,
	CreatedOn DATETIME NOT NULL,	
	UpdatedBy INT NULL,
	UpdatedOn DATETIME NULL,
	CONSTRAINT UK1_IssueCategory UNIQUE(IssueCategory),
	CONSTRAINT FK1_IssueCat_CreatedBy FOREIGN KEY(CreatedBy) REFERENCES Users(UserId)
);

CREATE INDEX IDX1_IssueCategory ON IssueCategories(IssueCategory);

-- Clients
CREATE TABLE Clients(
	ClientId INT NOT NULL IDENTITY(1,1),
	ClientName VARCHAR(100) NOT NULL ,
	CostCenter VARCHAR(100) NOT NULL ,
	CreatedBy INT NOT NULL,
	CreatedOn DATETIME NOT NULL,	
	UpdatedBy INT NULL,
	UpdatedOn DATETIME NULL,
	CONSTRAINT UK1_Clients_ClientName UNIQUE(ClientName),
	CONSTRAINT FK1_Clients_CreatedBy FOREIGN KEY(CreatedBy) REFERENCES Users(UserId)
);

CREATE INDEX IDX1_Clients_ClientName ON Clients(ClientName);

ALTER TABLE Clients
ADD CONSTRAINT PK1_Clients_ClientId PRIMARY KEY(ClientId);

-- SubClients
CREATE TABLE SubClients(
	SubClientId INT NOT NULL IDENTITY(1,1),
	ClientId INT NOT NULL ,
	SubClientName VARCHAR(100) NOT NULL,
	ProductionTarget INT NOT NULL,
	QualityTarget INT NOT NULL,
	CreatedBy INT NOT NULL,
	CreatedOn DATETIME NOT NULL,	
	UpdatedBy INT NULL,
	UpdatedOn DATETIME NULL,
	CONSTRAINT UK1_SC_SubClientName UNIQUE(SubClientName),
	CONSTRAINT FK1_SC_CreatedBy FOREIGN KEY(CreatedBy) REFERENCES Users(UserId),
	CONSTRAINT FK1_SC_ClientId FOREIGN KEY(ClientId) REFERENCES Clients(ClientId)
);

CREATE INDEX IDX1_SC_Client_SubC_Pt_Qt ON SubClients(ClientId,SubClientName,ProductionTarget,QualityTarget);

-- DowntimeRequest

CREATE TABLE DowntimeRequest(
	DowntimeRequestId INT NOT NULL IDENTITY(1,1),
	EmployeeId INT NOT NULL ,
	EmployeeName VARCHAR(100) NOT NULL,
	Designation INT NOT NULL,
	Location INT NOT NULL,
	EmailId INT NOT NULL,
	Vertical INT NOT NULL,
	CoderOrQa INT NOT NULL,
	CostCenter INT NOT NULL,
	ClientName INT NOT NULL,
	SubClientName INT NOT NULL,
	From INT NOT NULL,
	StartingAt INT NOT NULL,
	To INT NOT NULL,
	EndedAt INT NOT NULL,
	TotalDowntime INT NOT NULL,
	PerDayLimit INT NOT NULL,
	DowntimeType INT NOT NULL,
	IssueCategory INT NOT NULL,
	IssueType INT NOT NULL,
	OasisId INT NOT NULL,
	CreatedBy INT NOT NULL,
	CreatedOn DATETIME NOT NULL,	
	UpdatedBy INT NULL,
	UpdatedOn DATETIME NULL,
	CONSTRAINT UK1_SC_SubClientName UNIQUE(SubClientName),
	CONSTRAINT FK1_SC_CreatedBy FOREIGN KEY(CreatedBy) REFERENCES Users(UserId),
	CONSTRAINT FK1_SC_ClientId FOREIGN KEY(ClientId) REFERENCES Clients(ClientId)
);

CREATE INDEX IDX1_SC_Client_SubC_Pt_Qt ON SubClients(ClientId,SubClientName,ProductionTarget,QualityTarget);
