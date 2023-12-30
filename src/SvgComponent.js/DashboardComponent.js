import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, {Path, Defs, ClipPath, Rect} from 'react-native-svg';
import {SIZES} from '../../constant';

export const HomeIconFocusedComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M20.54 6.82L14.78 2.79C13.21 1.69 10.8 1.75 9.28999 2.92L4.27999 6.83C3.27999 7.61 2.48999 9.21 2.48999 10.47V17.37C2.48999 19.92 4.55999 22 7.10999 22H17.89C20.44 22 22.51 19.93 22.51 17.38V10.6C22.51 9.25 21.64 7.59 20.54 6.82ZM13.25 18C13.25 18.41 12.91 18.75 12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V15C11.75 14.59 12.09 14.25 12.5 14.25C12.91 14.25 13.25 14.59 13.25 15V18Z"
          fill="#327113"
        />
      </Svg>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

export const TransactionIconComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M22.6667 12V17C22.6667 20 20.6667 22 17.6667 22H7.66675C4.66675 22 2.66675 20 2.66675 17V12C2.66675 9.28 4.30675 7.38 6.85675 7.06C7.11675 7.02 7.38675 7 7.66675 7H17.6667C17.9267 7 18.1767 7.00999 18.4167 7.04999C20.9967 7.34999 22.6667 9.26 22.6667 12Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18.4182 7.05C18.1782 7.01 17.9282 7.00001 17.6682 7.00001H7.66815C7.38815 7.00001 7.11815 7.02001 6.85815 7.06001C6.99815 6.78001 7.19815 6.52001 7.43815 6.28001L10.6882 3.02C12.0582 1.66 14.2782 1.66 15.6482 3.02L17.3982 4.79002C18.0382 5.42002 18.3782 6.22 18.4182 7.05Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M22.6667 12.5H19.6667C18.5667 12.5 17.6667 13.4 17.6667 14.5C17.6667 15.6 18.5667 16.5 19.6667 16.5H22.6667"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <Text style={styles.title}>Transactions</Text>
    </View>
  );
};

export const RewardIconComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M1.24607 7.69433C0.983154 7.69433 0.74324 7.48154 0.75532 7.20338C0.82611 5.57456 1.02443 4.51419 1.58007 3.67538C1.89975 3.1928 2.29682 2.77308 2.75336 2.43517C3.98733 1.52185 5.72813 1.52185 9.20971 1.52185H13.4566C16.9381 1.52185 18.679 1.52185 19.9129 2.43517C20.3695 2.77308 20.7665 3.1928 21.0862 3.67538C21.6418 4.5141 21.8402 5.57432 21.9109 7.20283C21.923 7.48131 21.6828 7.69433 21.4196 7.69433C19.9537 7.69433 18.7653 8.95048 18.7653 10.5C18.7653 12.0495 19.9537 13.3056 21.4196 13.3056C21.6828 13.3056 21.923 13.5187 21.9109 13.7972C21.8402 15.4257 21.6418 16.4859 21.0862 17.3247C20.7665 17.8072 20.3695 18.2269 19.9129 18.5648C18.679 19.4781 16.9381 19.4781 13.4566 19.4781H9.20971C5.72813 19.4781 3.98733 19.4781 2.75336 18.5648C2.29682 18.2269 1.89975 17.8072 1.58007 17.3247C1.02443 16.4858 0.82611 15.4254 0.75532 13.7967C0.74324 13.5185 0.983154 13.3056 1.24607 13.3056C2.71199 13.3056 3.90035 12.0495 3.90035 10.5C3.90035 8.95048 2.71199 7.69433 1.24607 7.69433Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <Path
          d="M8.68848 13.1406L13.9776 7.85938"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.68848 7.85938H8.70035M13.9657 13.1406H13.9776"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <Text style={styles.title}>Rewards</Text>
    </View>
  );
};

export const SettingIconComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M9.99992 9.99998C12.3011 9.99998 14.1666 8.22777 14.1666 6.04165C14.1666 3.85552 12.3011 2.08331 9.99992 2.08331C7.69873 2.08331 5.83325 3.85552 5.83325 6.04165C5.83325 8.22777 7.69873 9.99998 9.99992 9.99998Z"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M17.1582 17.9167C17.1582 14.8529 13.9499 12.375 9.99988 12.375C6.04988 12.375 2.84155 14.8529 2.84155 17.9167"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <Text style={styles.title}>Accounts</Text>
    </View>
  );
};

export const HomeIconComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M8.2922 20.1164H6.1537C3.79158 20.1164 1.87671 18.14 1.87671 15.7022V8.75826C1.87671 7.2147 2.65791 5.78327 3.93693 4.98325L9.28316 1.63918C10.6457 0.786939 12.3542 0.786939 13.7167 1.63918L19.0629 4.98325C20.342 5.78327 21.1232 7.2147 21.1232 8.75826V15.7022C21.1232 18.14 19.2083 20.1164 16.8462 20.1164H14.7077M8.2922 20.1164V15.7022C8.2922 13.8737 9.7283 12.3916 11.4999 12.3916C13.2716 12.3916 14.7077 13.8737 14.7077 15.7022V20.1164M8.2922 20.1164H14.7077"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <Text style={styles.title}>Home</Text>
    </View>
  );
};

export const TransactionFocusedIconComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M22.6667 12.0582V17.0582C22.6667 20.0582 20.6667 22.0582 17.6667 22.0582H7.66675C4.66675 22.0582 2.66675 20.0582 2.66675 17.0582V12.0582C2.66675 9.33817 4.30675 7.43816 6.85675 7.11816C7.11675 7.07816 7.38675 7.05817 7.66675 7.05817H17.6667C17.9267 7.05817 18.1767 7.06815 18.4167 7.10815C20.9967 7.40815 22.6667 9.31817 22.6667 12.0582Z"
          fill="#327113"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M18.4182 7.10817C18.1782 7.06817 17.9282 7.05818 17.6682 7.05818H7.66815C7.38815 7.05818 7.11815 7.07818 6.85815 7.11818C6.99815 6.83817 7.19815 6.57818 7.43815 6.33818L10.6882 3.07817C12.0582 1.71817 14.2782 1.71817 15.6482 3.07817L17.3982 4.84819C18.0382 5.47819 18.3782 6.27817 18.4182 7.10817Z"
          fill="#327113"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M22.6667 12.5582H19.6667C18.5667 12.5582 17.6667 13.4582 17.6667 14.5582C17.6667 15.6582 18.5667 16.5582 19.6667 16.5582H22.6667"
          fill="#327113"
        />
        <Path
          d="M22.6667 12.5582H19.6667C18.5667 12.5582 17.6667 13.4582 17.6667 14.5582C17.6667 15.6582 18.5667 16.5582 19.6667 16.5582H22.6667"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <Text style={styles.title}>Transactions</Text>
    </View>
  );
};

export const RewardFocusedIconComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M1.24607 7.75249C0.983154 7.75249 0.74324 7.5397 0.75532 7.26155C0.82611 5.63272 1.02443 4.57236 1.58007 3.73355C1.89975 3.25097 2.29682 2.83124 2.75336 2.49334C3.98733 1.58002 5.72813 1.58002 9.20971 1.58002H13.4566C16.9381 1.58002 18.679 1.58002 19.9129 2.49334C20.3695 2.83124 20.7665 3.25097 21.0862 3.73355C21.6418 4.57226 21.8402 5.63249 21.9109 7.261C21.923 7.53948 21.6828 7.75249 21.4196 7.75249C19.9537 7.75249 18.7653 9.00864 18.7653 10.5582C18.7653 12.1077 19.9537 13.3638 21.4196 13.3638C21.6828 13.3638 21.923 13.5768 21.9109 13.8554C21.8402 15.4839 21.6418 16.5441 21.0862 17.3828C20.7665 17.8653 20.3695 18.2851 19.9129 18.623C18.679 19.5363 16.9381 19.5363 13.4566 19.5363H9.20971C5.72813 19.5363 3.98733 19.5363 2.75336 18.623C2.29682 18.2851 1.89975 17.8653 1.58007 17.3828C1.02443 16.544 0.82611 15.4836 0.75532 13.8548C0.74324 13.5766 0.983154 13.3638 1.24607 13.3638C2.71199 13.3638 3.90035 12.1077 3.90035 10.5582C3.90035 9.00864 2.71199 7.75249 1.24607 7.75249Z"
          fill="#327113"
          stroke="white"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
        <Path
          d="M8.68848 13.1988L13.9776 7.91754"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M8.68848 7.91754H8.70035M13.9657 13.1988H13.9776"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <Text style={styles.title}>Rewards</Text>
    </View>
  );
};

export const SettingFocusedIconComponent = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Path
          d="M9.99992 10.0581C12.3011 10.0581 14.1666 8.28594 14.1666 6.09981C14.1666 3.91369 12.3011 2.14148 9.99992 2.14148C7.69873 2.14148 5.83325 3.91369 5.83325 6.09981C5.83325 8.28594 7.69873 10.0581 9.99992 10.0581Z"
          fill="#327113"
          stroke="#327113"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <Path
          d="M17.1582 17.9748C17.1582 14.9111 13.9499 12.4332 9.99988 12.4332C6.04988 12.4332 2.84155 14.9111 2.84155 17.9748"
          fill="#327113"
        />
        <Path
          d="M17.1582 17.9748C17.1582 14.9111 13.9499 12.4332 9.99988 12.4332C6.04988 12.4332 2.84155 14.9111 2.84155 17.9748"
          stroke="#327113"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </Svg>
      <Text style={styles.title}>Accounts</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    color: '#1D493E',
  },
});
