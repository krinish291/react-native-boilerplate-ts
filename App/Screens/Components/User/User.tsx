import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CommonStyle from '@Theme/CommonStyle';
import { AppContext } from '@AppContext/index';
import { CustomText } from '@CommonComponent/index';
import { ButtonComponent } from '@SubComponents/index';

const styles = StyleSheet.create({
  btnTitle: {
    marginVertical: 10,
  },
  btnBorder: {
    borderRadius: 40,
  },
});
const Users = () => {
  const { appTheme } = useContext(AppContext);
  const { btnTitle, btnBorder } = styles;

  return (
    <SafeAreaView
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        { backgroundColor: appTheme.background },
      ]}>
      <CustomText xlarge style={[btnTitle, { color: appTheme.text }]}>
        Button Component
      </CustomText>
      <ButtonComponent title={'Button'} onPress={() => null} />
      <ButtonComponent title={'Button'} isProcessing onPress={() => null} />
      <ButtonComponent
        title={'Border Button'}
        border={appTheme.themeColor}
        textColor={appTheme.themeColor}
        backColor={appTheme.background}
        onPress={() => null}
      />
      <ButtonComponent
        title={'Danger Button'}
        border={appTheme.red}
        textColor={appTheme.red}
        backColor={appTheme.background}
        onPress={() => null}
      />
      <ButtonComponent
        title={'Disabled Button'}
        border={appTheme.lightText}
        textColor={appTheme.lightText}
        backColor={appTheme.background}
        onPress={() => null}
      />
      <ButtonComponent
        title={'Rounded Button'}
        style={btnBorder}
        onPress={() => null}
      />
    </SafeAreaView>
  );
};

export default Users;
