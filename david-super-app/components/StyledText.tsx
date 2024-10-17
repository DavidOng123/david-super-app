import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { useTheme } from '@react-navigation/native';

export type ThemedTextProps = TextProps & {
  type?: 'normal' | 'title' | 'label' | 'subtitle' ;
};

export function StyledText({
  style,
  type = 'normal',
  ...rest
}: ThemedTextProps) {
  const {colors} = useTheme();

  return (
    <Text
      style={[
        { color:colors.text },
        type === 'normal' ? styles.normal : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'label' ? styles.label : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  normal: {
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    color:'black'
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 16,
    color:'#D9D9D9'
  },
  label: {
    lineHeight: 20,
    fontSize: 14,
  },
});
