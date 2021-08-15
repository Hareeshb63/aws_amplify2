export const schema = {
    "models": {
        "MetroSt": {
            "name": "MetroSt",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "stations": {
                    "name": "stations",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Vijaynagar": {
                    "name": "Vijaynagar",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Attiguppe": {
                    "name": "Attiguppe",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Jalahalli": {
                    "name": "Jalahalli",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Jayanagar": {
                    "name": "Jayanagar",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Banashankari": {
                    "name": "Banashankari",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "MetroSts",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "provider": "userPools",
                                "ownerField": "owner",
                                "allow": "owner",
                                "identityClaim": "cognito:username",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "2c909b10e915cc65eedf66d5217d7d00"
};