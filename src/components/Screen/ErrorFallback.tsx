import {SafeAreaView, Text, View} from 'react-native';

import {styles} from './ErrorFallback.styles';
import {Button} from '@rneui/themed';
import {useAppTranslation} from '@hooks';

export function ErrorFallback({
  error,
  resetErrorBoundary,
}: IErrorFallbackProps) {
  const {t} = useAppTranslation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{t('Oops!')}</Text>
        <Text style={styles.subtitle}>{t("There's an error")}</Text>
        <Text style={styles.error}>{error.toString()}</Text>
        <Button title="Try again" onPress={resetErrorBoundary} />
      </View>
    </SafeAreaView>
  );
}

export interface IErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => unknown;
}
