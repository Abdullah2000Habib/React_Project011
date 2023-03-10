import React from 'react';
import { GenderInput, GenderLabel, Input, Label, NewUserButton, NewUserForm, NewUserGender, NewUserItem, NewUserPageWrapper, NewUserSelect, NewUserTitle, Option } from './style';

export default function NewUserPage() {
  return (
    <>
        <NewUserPageWrapper>
          <NewUserTitle>New User</NewUserTitle>
          <NewUserForm>
            <NewUserItem>
              <Label>Username</Label>
              <Input type="text" placeholder="John Smith"/>
            </NewUserItem>
            <NewUserItem>
              <Label>Full Name</Label>
              <Input type="text" placeholder="john"/>
            </NewUserItem>
            <NewUserItem>
              <Label>Email</Label>
              <Input type="email" placeholder="john@gmail.com"/>
            </NewUserItem>
            <NewUserItem>
              <Label>Password</Label>
              <Input type="password" placeholder="password"/>
            </NewUserItem>
            <NewUserItem>
              <Label>Phone</Label>
              <Input type="text" placeholder="+1 123 456 78"/>
            </NewUserItem>
            <NewUserItem>
              <Label>Address</Label>
              <Input type="text" placeholder="New York | USA"/>
            </NewUserItem>
            <NewUserItem>
              <Label>Gender</Label>
              <NewUserGender>
                <GenderInput type="radio" name="gender" id="male" value="male"/>
                <GenderLabel for="male">Male</GenderLabel>
                <GenderInput type="radio" name="gender" id="female" value="female"/>
                <GenderLabel for="female">Female</GenderLabel>
                <GenderInput type="radio" name="gender" id="other" value="other"/>
                <GenderLabel for="other">Other</GenderLabel>
              </NewUserGender>
            </NewUserItem>
            <NewUserItem>
              <Label>Active</Label>
              <NewUserSelect name="active" id="active">
                <Option value="yes">Yes</Option>
                <Option value="no">No</Option>
              </NewUserSelect>
            </NewUserItem>
            <NewUserButton>Create</NewUserButton>
          </NewUserForm>
        </NewUserPageWrapper>
    </>
  )
}
