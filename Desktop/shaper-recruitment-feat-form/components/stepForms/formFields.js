const formData = {
    "steps": [
        {
            "fields": [
                {
                    "id": "field1",
                    "label": "Field 1",
                    "type": "text",
                    "placeholder": "Enter value for Field 1"
                },
                {
                    "id": "field2",
                    "label": "Select comunication method",
                    "type": "select",
                    "options": [
                        "Email ",
                        "call"
                    ]
                }
            ]
        },
        {
            "fields": [
                {
                    "id": "field3",
                    "label": "Field 3",
                    "type": "radio",
                    "options": [
                        "Option A",
                        "Option B"
                    ]
                }
            ]
        },
        {
            "fields": [
                {
                    "id": "car",
                    "label": "car",
                    "type": "radio",
                    "options": [
                        "Toyota",
                        "BMW",
                        "VW"
                    ]
                },
                {
                    "id": "firstName",
                    "label": "First Name",
                    "type": "text",
                    "placeholder": "Enter your first name"
                }
            ]
        },
        {
            "fields": [
                {
                    "id": "lastName",
                    "label": "Last Name",
                    "type": "text",
                    "placeholder": "Enter your last name"
                },
                {
                    "id": "email",
                    "label": "Email",
                    "type": "email",
                    "placeholder": "Enter your email"
                },
                {
                    "id": "password",
                    "label": "Password",
                    "type": "password",
                    "placeholder": "Enter your password"
                }
            ]
        },
        {
            "fields": [
                {
                    "id": "gender",
                    "label": "Gender",
                    "type": "select",
                    "options": [
                        "Male",
                        "Female",
                        "Other"
                    ]
                }
            ]
        },
        {
            "fields": [
                {
                    "id": "Qualification",
                    "label": "Heigst Qualification",
                    "type": "radio",
                    "options": [
                        "Matric",
                        "Deploma",
                        "Other"
                    ]
                },
                {
                    "id": "subscribe",
                    "label": "Subscribe to newsletter",
                    "type": "checkbox"
                }
            ]
        }
    ]
}

console.log(formData);